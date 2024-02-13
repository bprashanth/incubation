import { React, useState, useEffect } from 'react'
import './row.css';
import YouTube from "./youtube";
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, rowId, clickedRowId, handleRowClick, trailerUrl }) {
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
                {movies.map(movie => {
                    return <img
                        key={movie?.id}
                        src={`${base_url}${movie.backdrop_path}`}
                        className="row__poster" 
                        onClick={() => { handleRowClick(rowId, movie.id) }}
                        alt={movie?.name}
                    />
                })}    
            </div>
            {clickedRowId === rowId && <YouTube url={trailerUrl} height="390" width="100%"/>}
        </div>
    )
}

export default Row;