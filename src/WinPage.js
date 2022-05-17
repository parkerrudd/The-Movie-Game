import React from "react";

function WinPage(props) {
    const posterUrl = `https://image.tmdb.org/t/p/original/${props.moviePoster}`; 

    return (
            <div className="win-page">
                <div className="win-page-box">
                    <h3>Guesses: {props.guessCount}</h3>
                </div>
                <div>
                    <h3>Solution: {props.correctTitle}</h3>
                </div>
                <div >
                    <img className="movie-poster" src={posterUrl} alt="Movie Poster" />
                </div>
                <div>
                    <button className="share-btn">Share</button>
                </div>
            </div>
    )
}

export default WinPage; 