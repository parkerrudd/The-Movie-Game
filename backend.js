const PORT = 8000; 
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.json('hi')
})

//GENERATE STARTING POINT CALL
const firstMovie = ['Iron Man', 'Avatar', 'Titanic', 'Shawshank Redemption']
const day = 0; //write function to increase by one every new day

app.get('/starting-point', (req, res) => {

    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.REACT_APP_TMBD_KEY + '&language=en-US&page=1&include_adult=false',
      params: {query: firstMovie[day]}, 
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
})

//GET ACTOR GUESS AND SET ID
app.get('/actor-guess', (req, res) => {
  const actor = req.query.query
  console.log(req.query)

  var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/person?api_key=' + process.env.REACT_APP_TMBD_KEY + 
      '&language=en-US&page=1&include_adult=false',
      params: {query: actor}, 
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))