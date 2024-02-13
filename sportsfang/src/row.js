import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./row.css";
import YouTube from "./youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, clickedRowTitle, handleRowClick, fetchUrl, trailerUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* es6 function */}
                {movies.map(movie => {
                    return <img
                        key={movie.id} 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path 
                        }`} 
                        onClick={() => { handleRowClick(title, movie.id) }}
                        alt={movie.name}/>;
                })}
            </div>
            {(clickedRowTitle === title) && <YouTube url={trailerUrl} height="390" width="100%"/>}
        </div>
    )
}

export default Row