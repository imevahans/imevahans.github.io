import React from 'react';
import Heading2 from "./Heading2.jsx"
import Picture from "./Picture.jsx";
import Description from "./Description.jsx";

function Education() {
    return(
        <div>
            <Heading2 
                title="Education."
                color="#7286D3"
            />
            <div className='container mx-auto'>
                <div className='left-content'>
                    <Picture 
                        title="Nanyang Technological University, Singapore"
                        date="Aug 2021 - May 2025"
                        src="./background2.jpeg"
                        alt="Nanyang Technological University, Singapore"
                    />
                </div>
                <div className='vertical-line'></div>
                <div class="icon-container">
                <img className="svg-icon" src="./kayak.svg" alt="Boat Icon"></img>
                </div>
                <div className='right-content'>
                    <Description 
                        title="Bachelor of Engineering in Computer Science"
                        description="Expected Honours (Distinction), Current CGPA: 4.80 / 5.00"
                    />
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='left-content'>
                    <Description 
                        title="GCE ‘A’ Levels"
                        description="Rank Points (RP): 86.25 / 90"
                    />
                </div>
                <div className='vertical-line'></div>
                <div className='right-content'>
                    <Picture 
                        title="Serangoon Junior College, Singapore"
                        date="Jan 2017 - Dec 2018"
                        src="./background.jpeg"
                        alt="Serangoon Junior College, Singapore"
                    />
                </div>
            </div>
        </div>
    )
};

export default Education;