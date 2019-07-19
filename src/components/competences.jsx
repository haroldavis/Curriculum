import React from 'react';
import styled, { keyframes } from 'styled-components';
import H2Styled from '../styled/H2Styled';
import Pstyled from '../styled/PStyled';


const Competences = props => (
    <div className="competences">
        <H2Styled name="Competencias" />
        {props.date.map((com, index) => (
            <div className="competences-items" key={`Comp-${index}`}>
                <Pstyled name={com.title} />
            </div>
        ))}
    </div>
);

export default Competences;