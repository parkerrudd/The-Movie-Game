import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; 
import Search from "./search";

function App() {
  const [title, setTitle] = useState();
  const [year, setYear] = useState(); 

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: ,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setTitle(response.data.results[0].title);
      let release = response.data.results[0].release_date
      setYear(release.slice(0, 4));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []); 

  return (
    <div className="App">
      <div className="movie-grid">
        <div className="letter-container">
          <h1 className="letters wrong" id="M">M</h1>
        </div>
        <div className="letter-container">
          <h1 className="letters" id="O">O</h1>
        </div>
        <div className="letter-container">
          <h1 className="letters" id="V">V</h1>
        </div>
        <div className="letter-container">
          <h1 className="letters" id="I">I</h1>
        </div>
        <div className="letter-container">
          <h1 className="letters" id="E">E</h1>
        </div>
      </div>

      <div id="title">
        <h1>{title} ({year})</h1>
        <img src="" alt="" />
      </div>

      <Search title={title} year={year}/>
    </div>
  );
}

export default App;
