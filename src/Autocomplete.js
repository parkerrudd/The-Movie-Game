import React, { useEffect, useState } from "react";
import Actor from "./actor";

function Autocomplete(props) {
    const [suggestions, setSuggestions] = useState([]); 
    const array = ['Tom Holland', 'Patrick Stewart']
    // useEffect(() => {
    //     const axios = require("axios");

    //     const options = {
    //     method: 'GET',
    //     url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    //     params: {q: props.actor},
    //     headers: {
    //         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    //         'X-RapidAPI-Key': 'b6e5cd04demsh6ef6297dd9c508bp1a7ce6jsn100961ce392b'
    //     }
    //     };

    //     axios.request(options).then(function (response) {
    //         for (let i = 0; i < response.data.d.length; i++) {
    //             setSuggestions(suggestions.push(response.data.d[i].l))
    //         }
    //         console.log(suggestions);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    // }, [props.actor]); 

    return (
            <div>
                <datalist id="search-suggestions">
                        {array.map(x => 
                            <option value={x}></option>
                        )}
                        <option value="Tom Cruise">Tom Cruise</option>
                        <option value="Robert Downey Jr">Robert Downey Jr</option>
                </datalist>
            </div>
    ) 
}

export default Autocomplete; 