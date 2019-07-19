import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/h3Styled';
import Pstyled from '../styled/PStyled';

const Certificates = props => (
    <div className="certificates">
        <H2Styled name="Certificados" />
            {props.date.map((cer, index) => (
                <div className="Certificates-item"  key={`Cer-${index}`}>
                    <H3Styled>{cer.title} @ {cer.institution}-
                    <span>{cer.date}</span>
                    </H3Styled>
                    <Pstyled name={cer.description} />
                </div>
            ))}        
    </div>
);

export default Certificates;