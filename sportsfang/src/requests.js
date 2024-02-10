// Postman: prashanth.b@wadhwaniai.org
// developer.themoviedb.org
// API key: a4e01e75559e7ce658eaeb6bd0bd5610
// Access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGUwMWU3NTU1OWU3Y2U2NThlYWViNmJkMGJkNTYxMCIsInN1YiI6IjY1YmU1YTIyYTdlMzYzMDFiNzU0NzYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cO1b6RbowXaQD7cenasD5aUQVstXc0vtL5kgJbXMQvI
const API_KEY = "a4e01e75559e7ce658eaeb6bd0bd5610";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;