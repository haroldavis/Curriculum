import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from '../components/main';
import Sidebar from '../components/sidebar';
import Info from '../components/info';
import About from '../components/about';
import Education from '../components/education';
import Competences from '../components/competences';
import Certificates from '../components/certificates';
import Activity from '../components/activity';
import useGetDate from '../hooks/useGetDate';
const api = 'https://us-central1-cvharold-627d6.cloudfunctions.net/api'

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}
`;

const App = () => {
    const date = useGetDate(api);
    console.log(date)
    return date.length === 0 ? <h1>Cargando...</h1> : (

        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                    avatar={date.avatar}
                    name={date.name}
                    profession={date.profession}
                    bio={date.bio}
                    address={date.address}
                    social={date.social}
                />
            </Sidebar>
            <Info>
                <Education date={date.education} />
                <Certificates date={date.certificate} />
                <Competences date={date.competences} />                
                <Activity date={date.activity} />
            </Info>
        </Main>
    )
};

export default App;