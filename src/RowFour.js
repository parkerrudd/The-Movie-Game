import React, { useState, useEffect } from "react";

function RowFour(props) {
    const [actorsInBothMoviesFour, setActorsInBothMoviesFour] = useState([])
    useEffect(() => {
        let inBoth = []; 
        for (let i = 0; i < props.correctActors.length; i++) {
            if (props.actors.includes(props.correctActors[i])) {
            inBoth.push(props.correctActors[i])
            }
        }
      if (inBoth.length > 0) {
        setActorsInBothMoviesFour(inBoth)
      }
    }, [props.actors])

    return (
        <tr id="results">
                {props.filmTitle === props.correctTitle ? <td style={{background:'#549C30'}}>{props.filmTitle}</td> 
                :<td style={{background:'#AA3F44'}}>{props.filmTitle}</td>}
                {props.director === props.correctDirector ? <td style={{background:'#549C30'}}>{props.director}</td> 
                :<td style={{background:'#AA3F44'}}>{props.director}</td>}
                {actorsInBothMoviesFour.length > 0 ? <td style={{background:'#549C30'}}>{JSON.stringify(actorsInBothMoviesFour.slice(0, 3)).replace(/[\[\]']+/g,'').replace(/"/g, '')}</td> 
                :<td style={{background:'#AA3F44'}}>{props.actors[0]}</td>}
                {props.genre === props.correctGenre ? <td style={{background:'#549C30'}}>{props.genre}</td> 
                :<td style={{background:'#AA3F44'}}>{props.genre}</td>}
                {props.company === props.correctCompany ? <td style={{background:'#549C30'}}>{props.company}</td> 
                :<td style={{background:'#AA3F44'}}>{props.company}</td>}
                {props.year === props.correctYear? <td style={{background:'#549C30'}}>{props.year}</td> 
                : props.year[0] === props.correctYear[0] && props.year[2] === props.correctYear[2] ? <td style={{background:'#f7b500'}}>{props.year}</td> : <td style={{background:'#AA3F44'}}>{props.year}</td>}
        </tr>
    )
}

export default RowFour; 