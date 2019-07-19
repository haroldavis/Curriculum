import React from 'react';
import H2Styled from '../styled/H2Styled';
import Pstyled from '../styled/PStyled';


const Activity = props => (
    <div className="activity">
        <H2Styled name="Actividades" />
        {props.date.map((act, index) => (
            <div className="activity-item" key={`Act-${index}`}>
                <Pstyled name={act.title} />
            </div>
        ))}
    </div>
);

export default Activity;