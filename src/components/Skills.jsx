import React from 'react';
import Heading2 from "./Heading2.jsx";
import SkillsContent from "./SkillsContent.jsx";
import SkillsBar from "./SkillsBar.jsx";

function Skils() {
    return(
        <div id="SkillsDiv">
            <Heading2 
                title="Skills."
                color="#7286D3"
            />
            <div className='container mx-auto'>
                <div class="left-content">
                    <SkillsContent 
                        content="C Language / CSS / HTML, Java / JavaScript / Python"
                    />
                    
                </div>
                <div class="right-content">
                    <SkillsBar 
                        value="70"
                        left="90px"
                    />
                </div>
            </div>
            <div className='container mx-auto'>
                <div class="left-content">
                    <SkillsContent 
                        content="TypeScript / React"
                    />
                </div>
                <div class="right-content">
                    <SkillsBar 
                        value="50"
                        left="55px"
                    />
                </div>
            </div>
            <div className='container mx-auto'>
                <div class="left-content">
                    <SkillsContent 
                        content="MongoDB / Microsoft SQL Server Management Studio"
                    />
                </div>
                <div class="right-content">
                    <SkillsBar 
                        value="30"
                        left="20px"
                    />
                </div>
            </div>
        </div>
        
    )
};

export default Skils;