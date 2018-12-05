import React from 'react';


const date = new Date();
let timestamp = date.toISOString();
// define timestamp variable, "onClick" display variable

function Timestamp() {
    return (
        <div>
        <p>{timestamp}</p>
        </div>
    )
}


export default Timestamp;