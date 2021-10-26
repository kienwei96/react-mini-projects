import React, { useRef } from "react";
import { Link } from "react-router-dom"

export default function Search(props) {
    const titleSearch = useRef();

    const handleSubmit =() => {
        const search = titleSearch.current.value.replace(/\s/, "+")
        callApi(search)
    }

    async function callApi(search){
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
            const data = await response.json();
            props.setMovie(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <input placeholder="Enter movie title..." type="text" ref={titleSearch} />
        <Link to='/result'>
            <input value="Search" type="submit" onClick={handleSubmit} />
        </Link>
        </>
    )
}
