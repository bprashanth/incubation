import {React, useState} from 'react';
import './App.css';
import Row from './row';
import requests from './requests';
import Banner from './banner';
import Nav from './nav';
import movieTrailer from "movie-trailer";

function App() {
  const [clickedRowTitle, setClickedRowTitle] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleRowClick = (rowTitle, movieId) => {
    console.log("handleRowClick: App.js movidId " + movieId)
    movieTrailer(null, {tmdbId: movieId})
    .then((url) => {
        // everything after the question mark
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
        setClickedRowTitle(rowTitle);
    }).catch(error => console.log(error + " " + movieId));
  }
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchNetflixOriginals} trailerUrl={trailerUrl} isLargeRow/>
      <Row title="Trending Now" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchTrending} trailerUrl={trailerUrl}/>
      <Row title="Top Tated" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchTopRated} trailerUrl={trailerUrl}/>
      <Row title="Action Movies" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchActionMovies} trailerUrl={trailerUrl}/>
      <Row title="Comedy Movies" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchComedyMovies} trailerUrl={trailerUrl}/>
      <Row title="Horror Movies" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchHorrorMovies} trailerUrl={trailerUrl}/>
      <Row title="Romance Movies" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchRomanceMovies} trailerUrl={trailerUrl}/>
      <Row title="Documentaries" clickedRowTitle={clickedRowTitle} handleRowClick={handleRowClick} fetchUrl={requests.fetchDocumentaries} trailerUrl={trailerUrl}/>
    </div>
  );
}

export default App;
