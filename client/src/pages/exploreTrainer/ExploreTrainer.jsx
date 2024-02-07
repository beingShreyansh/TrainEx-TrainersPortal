import React, { useEffect, useState } from "react";
import "./ExploreTrainers.css";
import axios from "axios";
import SortableHeaderCell from "./SortableHeaderCell";
import useDebounce from "../../hooks/useDebounce";

const pageLimit = 5;
const ExploreTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState({ field: null, order: "asc" });
  const [pageNumber, setPageNumber] = useState(1);
  const debouncedValue = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/home/getTrainers`,
          {
            pagination: {
              pageLimit,
              pageNumber,
            },
            filters: {
              skills: debouncedValue,
            },
          }
        );
        setTrainers(response.data.trainers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [debouncedValue, pageNumber]);

  // Function to handle sorting locally
  const handleSort = (field) => {
    const sortedTrainers = [...trainers].sort((a, b) => {
      if (sort.order === "asc") {
        return a[field] < b[field] ? -1 : 1;
      } else {
        return a[field] > b[field] ? -1 : 1;
      }
    });

    setTrainers(sortedTrainers);
    setSort({ field, order: sort.order === "asc" ? "desc" : "asc" });
  };

  const goToPage = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const displayedTrainers = trainers.slice(startIndex, endIndex);

  return (
    <div className="explore-trainers">
      <h2>Explore Trainers</h2>
      <div className="search-bar-section">
        <input
          type="text"
          placeholder="Search trainers by skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="trainer-table">
        <div className="table-row header">
          <div className="table-cell">Serial No.</div>
          <div className="table-cell">
            Name
            <SortableHeaderCell
              field="name"
              currentSort={sort}
              handleSort={handleSort}
            />
          </div>

          <div className="table-cell">Skills</div>

          <div className="table-cell">
            Fees
            <SortableHeaderCell
              field="fees"
              currentSort={sort}
              handleSort={handleSort}
            />
          </div>
        </div>
        {displayedTrainers.map((trainer, index) => (
          <div key={trainer.id} className="table-row">
            <div className="table-cell">{index + 1}</div>
            <div className="table-cell">
              <img src={trainer.imageUrl} alt={trainer.name} />
              {trainer.name}
            </div>
            <div className="table-cell">{trainer.skills.join(", ")}</div>
            <div className="table-cell">{trainer.fees}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => goToPage(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <span>Page {pageNumber}</span>
        <button onClick={() => goToPage(pageNumber + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ExploreTrainers;
