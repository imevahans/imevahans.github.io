import React from 'react';
import Heading from "./Heading.jsx";
import Content from "./Content.jsx";

function Section() {
    return (
        <div>
            <Heading 
                title="Xin Han."
                color="#FFF2F2"
            />
            <Content 
                content="Hello! I’m Xin Han and I’m currently a year 2 Computer Science undergraduate at Nanyang Technological University, Singapore."
            />
            <Content 
                content="Currently, I’m still in the midst of exploring the different fields in the technology industries, such as Cyber Security, Software Engineering, Data Science and Artificial Intelligence!"
            />
            <Content 
                content="During my free time, I like to exercise and play sports. I enjoy kayaking, swimming and also doing calisthenics!"
            />
        </div>
    )
};

export default Section;