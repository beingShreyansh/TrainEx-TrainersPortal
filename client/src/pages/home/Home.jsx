// HomePage.jsx

import React from "react";
import "./Home.css";
import TrainerCard from "../../components/trainersCard/TrainerCard";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  const trainers = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
      name: "John Doe",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
      name: "Jane Smith",
      skills: ["Java", "Spring Boot", "Database Management"],
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
      name: "Mark Johnson",
      skills: ["Python", "Django", "Data Science"],
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
      name: "Sarah Williams",
      skills: ["HTML", "CSS", "UI/UX Design"],
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
      name: "Alex Turner",
      skills: ["PHP", "MySQL", "Web Security"],
    },
  ];
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search button clicked");
  };
  return (
    <>
      <div className="homepage-container">
        <div className="welcome-section">
          <h1>Welcome to the Trainer's Portal</h1>
          <p>Your one-stop destination for finding professional trainers.</p>
          <button className="explore-link">Explore Trainers</button>
        </div>

        <div className="featured-trainers-section">
          <h2>Featured Trainers</h2>
          <div className="featured-trainers-list">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                image={trainer.image}
                name={trainer.name}
                skills={trainer.skills}
              />
            ))}
          </div>
        </div>

        <div className="search-bar-section">
          <input type="text" placeholder="Search trainers by skill..." />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
