import React from 'react';

function Bedroom(props) {
    return (
        <div className={'bedroom' + props.bednum}>
            <h1>Bedroom {props.bednum}</h1>
        </div>
    );
}

export default Bedroom;