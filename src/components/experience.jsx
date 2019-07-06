import React from 'react';

const Experience = props => (
    <div className="experience">
        <div className="experience-container">
            {props.date.map((exp, index) => (
                <div className="experience-item" key={`Cer-${index}`}>
                    <h2>{exp.company} {exp.jobTitle} {exp.jobDescription} 
                    <span>{exp.startDate} - {exp.endDate}</span>
                    </h2>
                    <p>Fullstack</p>
                </div>
            ))}

        </div>
    </div>
);

export default Experience;