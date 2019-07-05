import React from 'react';

import Main from '../components/main';
import Sidebar from '../components/sidebar';
import Info from '../components/info';
import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Certificates from '../components/certificates';
import Skills from '../components/skills';
import Social from '../components/social';
import useGetDate from '../hooks/useGetDate';

const App = () => {
    const date = useGetDate();
    console.log(date)
    return date.length === 0 ? <h1>Cargando...</h1> : (
        <Main> 
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
                <Experience 
                date={date.experience}
                />
                <Education 
                date={date.education}
                />
                <Certificates 
                date={date.certificate}
                />
                <Skills />
            </Info>
        </Main>
    );
}

export default App;