import React from "react";

function RowTwo(props) {

    return (
        <tr id="results">
                {props.filmTitle === props.correctTitle ? <td style={{background:'#549C30'}}>{props.filmTitle}</td> 
                :<td style={{background:'#AA3F44'}}>{props.filmTitle}</td>}
                {props.director === props.correctDirector ? <td style={{background:'#549C30'}}>{props.director}</td> 
                :<td style={{background:'#AA3F44'}}>{props.director}</td>}
                {props.actors[0] === props.correctActors[0] ? <td style={{background:'#549C30'}}>{props.actors[0]}</td> 
                :<td style={{background:'#AA3F44'}}>{props.actors[0]}</td>}
                {props.genre === props.correctGenre ? <td style={{background:'#549C30'}}>{props.genre}</td> 
                :<td style={{background:'#AA3F44'}}>{props.genre}</td>}
                {props.company === props.correctCompany ? <td style={{background:'#549C30'}}>{props.company}</td> 
                :<td style={{background:'#AA3F44'}}>{props.company}</td>}
                {props.year === props.correctYear? <td style={{background:'#549C30'}}>{props.year}</td> 
                :<td style={{background:'#AA3F44'}}>{props.year}</td>}
        </tr>
    )
}

export default RowTwo; 