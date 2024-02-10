import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./row.css";
import YouTube from "react-youtube";

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // there's a bug in autoplaying the video that causes a glitch.
            autoplay: 1,
            mute: 1,
            loop: 1
        },
    };

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
            {(clickedRowTitle === title) && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row