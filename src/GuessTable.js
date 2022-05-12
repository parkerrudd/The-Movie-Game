import React from "react";

function GuessTable() {

    return (
        <div className="table-section">
        <table className="table">
            <tr id="headers"> 
                <th>Title</th>
                <th>Director</th>
                <th>Cast</th>
                <th>Genre</th>
                <th>Company</th>
                <th>Year</th>
            </tr>
            <tr id="results">
                <td>Iron Man</td>
                <td>Jon Favreau</td>
                <td>Robert Downey Jr</td>
                <td>Action</td>
                <td>Marvel Studios</td>
                <td>2008</td>
            </tr>
            
        </table>
        </div>
    )
}

export default GuessTable; 

