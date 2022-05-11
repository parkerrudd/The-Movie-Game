import React from "react";

function Letters(props) {


    return (
        <div className="movie-grid">
          <div className="letter-container">
            {props.mRight ? 
              <h1 id="M" className="letters right">M</h1> :
            props.mWrong ? 
              <h1 id="M" className="letters wrong">M</h1> :
              <h1 id="M" className="letters">M</h1>} 

          </div>
          <div className="letter-container">
          {props.wrongCount > 1 ? <h1 id="O" className="letters wrong">O</h1> : <h1 id="O" className="letters">O</h1>} 
          </div>
          <div className="letter-container">
          {props.wrongCount > 2 ? <h1 id="V" className="letters wrong">V</h1> : <h1 id="V" className="letters">V</h1>}
          </div>
          <div className="letter-container">
          {props.wrongCount > 3 ? <h1 id="I" className="letters wrong">I</h1> : <h1 id="I" className="letters">I</h1>}
          </div>
          <div className="letter-container">
          {props.wrongCount > 4 ? <h1 id="E" className="letters wrong">E</h1> : <h1 id="E" className="letters">E</h1>}
          </div>
        </div>
    ); 
}; 

export default Letters; 