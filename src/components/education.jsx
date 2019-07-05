import React from 'react';

const Education = props => (
    <div className="education">
        <div className="education-container">
            {props.date.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <h2>{edu.degree} {edu.institution}
                        <span>{edu.starDate} - {edu.endDate}</span>
                    </h2>
                    <p>Fullstack</p>
                </div>
            ))}
        </div>
    </div>
);

export default Education;