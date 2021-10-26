import React from "react";
import {Link} from "react-router-dom";

export default function Results(props) {

    console.log(props.movie);
    return (

        <Link  to={`/movieDetails/${props.movie.id}`}>
        <div className="movie">
            {props.movie.image ? <> 
            <img src={props.movie.image.medium} alt={props.movie.name}/>
            <p>{props.movie.name}</p>
            </>
            : <>
            <img className="noImage" src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt={props.movie.name}/>
            <p>{props.movie.name}</p>
            </>}
        </div>
        </Link>
    )
}