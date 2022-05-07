import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; 
import Search from "./search";

function App() {

  const [data, setData] = useState();
  const [year, setYear] = useState(); 

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=dc60bf976a71bca2cb82fc0c39372ba7&language=en-US&query=iron man&page=1&include_adult=false',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setData(response.data.results[0].title);
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
        <h1>{data} ({year})</h1>
        <img src="" alt="" />
      </div>

      <Search />
    </div>
  );
}

export default App;
