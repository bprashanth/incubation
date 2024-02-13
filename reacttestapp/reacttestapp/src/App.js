import logo from './logo.svg';
import './App.css';
import Row from './row';
import requests from './requests';
import movieTrailer from "movie-trailer";
import axios from './axios';
import { React, useState, useEffect } from 'react'
import YouTube from "react-youtube-test";




function App() {
  const [clickedRowId, setClickedRowId] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState("");


  const handleRowClick = (newRowId, movieId) => {
    movieTrailer(null, {tmdbId: movieId})
    .then((url) => {
        // everything after the question mark
        const urlParams = new URLSearchParams(new URL(url).search);
        const ytFragment = urlParams.get('v');
        console.log("========setting trailer url to " + ytFragment)
        setTrailerUrl(ytFragment);
        setClickedRowId(newRowId);
    }).catch(error => console.log(error + " " + movieId));
    // setTrailerUrl(url)
  }
  const opts = {
        height: "300",
        width: "100%",
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
        }
    }

  return (
    <div className="app">
      {/* <YouTube videoId={"85Sg3MTrXyo"} opts={opts}/> */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} rowId={1} clickedRowId={clickedRowId} handleRowClick={handleRowClick} trailerUrl={trailerUrl}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} rowId={2} clickedRowId={clickedRowId} handleRowClick={handleRowClick} trailerUrl={trailerUrl}/>
    </div>
  );
}

export default App;
