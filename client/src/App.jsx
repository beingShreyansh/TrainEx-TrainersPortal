// src/App.js
import React from 'react';
import './App.css';

function App() {
  const trainers = [
    { id: 1, name: 'John Doe', skills: ['Fitness', 'Nutrition'], location: 'New York' },
    { id: 2, name: 'Jane Smith', skills: ['Yoga', 'Meditation'], location: 'Los Angeles' },
    // Add more trainers as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trainers Portal</h1>
      </header>
      <main>
        <section className="trainers-section">
          <h2>Featured Trainers</h2>
          <div className="trainer-list">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="trainer-card">
                <h3>{trainer.name}</h3>
                <p>{trainer.skills.join(', ')}</p>
                <p>{trainer.location}</p>
                <button>Contact</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Trainers Portal</p>
      </footer>
    </div>
  );
}

export default App;
