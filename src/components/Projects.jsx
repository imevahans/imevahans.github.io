import React from 'react';
import Heading2 from "./Heading2.jsx"
import Picture from "./Picture.jsx";
import Description from "./Description.jsx";

function Projects() {
    return(
        <div id="ProjectDiv">
            <Heading2 
                title="Projects."
                color="#7286D3"
            />
            <div className='container mx-auto'>
                <div className='left-content video-padding'>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/CiK4tKgl3Qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='vertical-line'></div>
                <div class="icon-container">
                </div>
                <div className='right-content'>
                    <Description 
                        title="SMU LIT Hackathon 2022"
                        description="Artificial Intelligence word detection model (Python) generation from PDF into easily editable MD&A drafting. Won R&T Tech Most Innovative Award and overall SMU LIT Hackathon 2022."
                    />
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='left-content'>
                    <Description 
                        title="Productivity Tab"
                        description="A Google Chrome extension (CSS, HTML, JavaScript) with frequently used study features, such as a clock, timer, and To-do list when opening a new tab."
                    />
                </div>
                <div className='vertical-line'></div>
                <div className='right-content video-padding'>
                    <div className='video'>
                        <iframe src="https://www.youtube.com/embed/ePtYqfwluSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Projects;