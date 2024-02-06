import React, { useEffect, useState } from "react";
import "./ExploreTrainers.css";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";

const pageLimit=10;
const ExploreTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchTerm) {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/home/getTrainers`,
            {
              pagination: {
                pageLimit,
                pageNumber: 1,
              },
              filters: {},
            }
          );
          setTrainers(response.data.trainers);
        } else {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/home/getTrainers`,
            {
              pagination: {
                pageLimit,
                pageNumber: 1,
              },
              filters: {
                skills: debouncedValue,
              },
            }
          );
          setTrainers(response.data.trainers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [debouncedValue]);

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
          <div className="table-cell">Name</div>
          <div className="table-cell">Skills</div>
          <div className="table-cell">Fees</div>
        </div>
        {trainers.map((trainer, index) => (
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
    </div>
  );
};

export default ExploreTrainers;
