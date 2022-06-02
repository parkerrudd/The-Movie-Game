import React, {useState, useEffect } from "react";

function WinPage(props) {
    const posterUrl = `https://image.tmdb.org/t/p/original/${props.moviePoster}`; 
    // const [playAgain, setPlayAgain] = useState(false); 
    // const playAgainHandler = () => {
    //     setPlayAgain(true); 
    // }

    // useEffect(() => {
    //     if (playAgain) 
    // }, [playAgain])

    return (
           <div className="win-page">
                <div className="win-page-box">
                    <h3>Guesses: {props.guessCount}</h3>
                    <h3>{props.time}</h3>
                </div>
                <div>
                    <h3>Solution: {props.correctTitle}</h3>
                </div>
                <div >
                    <img className="movie-poster" src={posterUrl} alt="Movie Poster" />
                </div>
                <div>
                    <button onClick={props.updatePlayAgain(false)} className="share-btn">Play Again</button>
            </div>
    </div> 
    )
}

export default WinPage; 