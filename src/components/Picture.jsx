import React from "react";

function Picture(props) {
    return (
        <div className="pictureContent">
            <p> {props.title} </p>
            <img src={props.src} alt={props.alt} className="picture"></img>
            <p> {props.date} </p>
        </div>
    )
};

export default Picture;