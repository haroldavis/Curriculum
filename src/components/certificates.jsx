import React from 'react';

const Certificates = props => (
    <div className="certificates">
        <div className="certificates-container">
            {props.date.map((cer, index) => (
                <div className="Certificates-item"  key={`Cer-${index}`}>
                    <h2>{cer.description}</h2>
                    <p>Fullstack</p>
                </div>
            ))}
        </div>
    </div>
);

export default Certificates;