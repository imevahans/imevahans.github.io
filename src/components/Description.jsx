import React from "react";

function Description(props) {
    return (
        <div className="description align-middle">
            <h1> {props.title} </h1>
            <p> {props.description} </p>
        </div>
    )
};

export default Description;