import React, { useEffect, useState } from "react";
import Actor from "./actor";

function Autocomplete(props) {
    const [suggestions, setSuggestions] = useState([]); 
    const array = ['Tom Holland', 'Patrick Stewart']
    

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