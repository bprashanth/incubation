import './App.css';
import Row from './row';
import requests from './requests';
import movieTrailer from "movie-trailer";
import { React, useState } from 'react'

function App() {
    const [clickedRowId, setClickedRowId] = useState(0);
    const [trailerUrl, setTrailerUrl] = useState("");

    const handleRowClick = (newRowId, movieId) => {
        movieTrailer(null, {tmdbId: movieId})
        .then((url) => {
            // everything after the question mark
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            setClickedRowId(newRowId);
        }).catch(error => console.log(error + " " + movieId));
    }

  return (
    <div className="app">
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} rowId={1} clickedRowId={clickedRowId} handleRowClick={handleRowClick} trailerUrl={trailerUrl}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} rowId={2} clickedRowId={clickedRowId} handleRowClick={handleRowClick} trailerUrl={trailerUrl}/>
    </div>
  );
}

export default App;
