import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TrainerCard from "../../components/trainersCard/TrainerCard";
import "./Home.css";
import useDebounce from "../../hooks/useDebounce";

const pageLimit = 5;
const HomePage = () => {
  const navigate = useNavigate();
  const [trainers, setTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!searchTerm) {
          response = await axios.post(
            `${import.meta.env.VITE_API_URL}/home/getTrainers`,
            {
              pagination: {
                pageLimit,
                pageNumber: 1,
              },
              filters: {},
            }
          );
        } else {
          response = await axios.post(
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
        }
        setTrainers(response.data.trainers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [debouncedValue]);

  return (
    <div className="homepage-container">
      <div className="welcome-section">
        <h1>Welcome to the Trainer's Portal</h1>
        <p>Your one-stop destination for finding professional trainers.</p>
        <button
          className="explore-link"
          onClick={() => navigate("/explore-trainers")}
        >
          Explore Trainers
        </button>
      </div>

      <div className="featured-trainers-section">
        <h2>Featured Trainers</h2>
        <div className="featured-trainers-list">
          {trainers.slice(0, pageLimit).map((trainer, index) => (
            <TrainerCard
              key={index}
              image={trainer.imageUrl}
              name={trainer.name}
              skills={trainer.skills}
            />
          ))}
        </div>
      </div>

      <div className="search-bar-section">
        <input
          type="text"
          placeholder="Search trainers by skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HomePage;
