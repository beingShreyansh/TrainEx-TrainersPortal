import React, { useEffect, useState } from 'react';
import './ExploreTrainers.css';
import axios from 'axios';

const ExploreTrainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/home/getTrainers`,
                    {
                        pagination: {
                            pageLimit: 10,
                            pageNumber: 1,
                        },
                    }
                );
                setTrainers(response.data.trainer);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="explore-trainers">
            <h2>Explore Trainers</h2>
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
                        <div className="table-cell"><img src={trainer.imageUrl} alt={trainer.name} />{trainer.name}</div>
                        <div className="table-cell">{trainer.skills.join(', ')}</div>
                        <div className="table-cell">{trainer.fees}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreTrainers;
