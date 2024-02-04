// TrainerCard.jsx

import React from 'react';
import './TrainerCard.css'
const TrainerCard = ({ image, name, skills }) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={`Avatar of ${name}`} className="trainer-image" />
      <div className="trainer-details">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-skills">{skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
