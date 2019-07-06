import React from 'react';
import Social from './social';
const About = ({ avatar, name, profession, bio, address, social }) => (
    <div className="about">
        <div className="about-container">
            <div className="about-avatar">
                <figure>
                    <img src={avatar} alt={name} />
                </figure>
            </div>
            <div className="about-name">
                <h2>{name}</h2>
            </div>
            <div className="about-profession">
                <p>{profession}</p>
            </div>
            <div className="about-description">
                <p>{bio}</p>
            </div>
            <div className="about-location">
                <p>{address}</p>
            </div>
            <div className="about-social">
            <Social social={social} />
                
            </div>
        </div>
    </div>
);

export default About;