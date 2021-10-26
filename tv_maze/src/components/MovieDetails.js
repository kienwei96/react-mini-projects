import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails(props) {

  const params = useParams();
  console.log(params)
  
//   console.log("first movie infor: " , props.movie[0].show.id)
  const movie = props.movie.filter( chosen => chosen.show.id.toString() === params.id)
  console.log(movie);

  return (
    <div>
      <h3>{`MovieName: ${movie[0].show.name} `}</h3>
      <h3>{`Rating: ${movie[0].score} `}</h3>
      <h3>{`Language: ${movie[0].show.language} `}</h3>
      {movie[0].show.image ? <> 
            <img className="infoImg" src={movie[0].show.image.original} alt={movie[0].name}/>
            <p>{movie[0].name}</p>
            </>
            : <>
            <img className="noImage" src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt={props.movie.name}/>
            <p>{props.movie.name}</p>
            </>}

    </div>
  )
}


export default MovieDetails;