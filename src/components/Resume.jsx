import React from 'react';
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Heading from "./Heading.jsx";
import FloatingIcon from './FloatingIcon.jsx';

function Resume() {
    return (
        <div id='ResumeDiv'>
            <Heading 
                title="Resume."
                color="#13005A"
            />
            <FloatingIcon />
            <Education />
            <Projects />
            <Skills />
        </div>
    )
}

export default Resume;