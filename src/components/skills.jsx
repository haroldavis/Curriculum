import React from 'react';

const Skills = props => (
    <div className="skills">
        <div className="skills-container">
            {props.date.map((skill, index) => (
                <div className="skills-items" key={`Skills-${index}`}>
                    <h5>{skill.name}</h5>
                    <div className="skills-line">
                        <span>{skill.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;