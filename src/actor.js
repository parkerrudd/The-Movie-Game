import React from "react";

function Actor (props) {

    return (
        <div id="title">
            <h1>{props.current} ({props.year})</h1>
            <img src="" alt="" />
        </div>
    ); 
}; 

export default Actor; 