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

const App = () => {
    return (
        <Main>
            <Sidebar>
                <About />
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