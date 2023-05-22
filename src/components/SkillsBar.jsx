import React from "react";

function SkillsBar(props) {
    return (
        <div className="w-1/2 relative">
            <img className="boat-icon" style={{left:props.left}} src="./boat.svg" alt="Boat Icon"></img>
            <progress className="skillsBar w-full river-progress" value={props.value} max="100"></progress>
        </div>
    )
}

export default SkillsBar;