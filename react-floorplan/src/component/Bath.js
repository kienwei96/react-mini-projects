import React from 'react';

function Bathroom(props) {
    return (
        <div className={props.size}>
            <h1>{props.size}</h1>
        </div>
    );
}

export default Bathroom;