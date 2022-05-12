import React from "react";

function RowTwo(props) {

    return (
        <tr id="results">
                <td>{props.filmTitle}</td>
                <td>{props.director}</td>
                <td>{props.actors[0]}</td>
                <td>{props.genre}</td>
                <td>{props.company}</td>
                <td>{props.year}</td>
        </tr>
    )
}

export default RowTwo; 