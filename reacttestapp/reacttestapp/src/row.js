import { React, useState, useEffect } from 'react'
import './row.css';
import YouTube from "react-youtube-test";
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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            {/* <h1 className="title">This is a row in the test app.</h1> */}
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
            {/* <button className="row__button" onClick={() => { handleRowClick(rowId, movieId) }}>Click here</button> */}
            {/* {<YouTube videoId={trailerUrl} opts={opts}/>} */}
            {clickedRowId === rowId && <iframe
                src={`https://www.youtube-nocookie.com/embed/${trailerUrl}?autoplay=1&mute=1&enablejsapi=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                height="390"
                width="100%"
                frameBorder={0}
            />}

        </div>
    )
}

export default Row;