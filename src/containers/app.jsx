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
    return (
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
                <Experience />
                <Education />
                <Certificates />
                <Skills />
            </Info>
        </Main>
    );
}

export default App;