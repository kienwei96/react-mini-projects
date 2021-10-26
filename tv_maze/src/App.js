import { Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Results from "./components/Results";
import MovieDetails from "./components/MovieDetails";



function App() {
    const [movie, setMovie] = useState([]);


    const movieData = movie.map((ele, index) => <Results key={index} movie={ele.show} />);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const resetPage = () => {
        setMovie([]);
    }

    console.log(movie)

    return (
        <>
        <Home />
        <Switch>
            <Route exact path='/'>
                <form onSubmit={submitHandler}>
                    <Search movie={movie} setMovie={setMovie}/>
                </form>
            </Route>
            <Route exact path='/result'>
                <Link to='/'>
                    <button onClick={resetPage}> Back to home </button>
                </Link>
                <div className='display'>
                    {movieData}
                </div>
            </Route>
            <Route path="/movieDetails/:id">
                <MovieDetails movie={movie} />
                <Link to='/result'>
                    <button > Back to previous page </button>
                </Link>
             </Route>
            <Redirect to ='/' />
        </Switch>
        </>
    )
}

export default App;