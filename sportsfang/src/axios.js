import axios from "axios";

/** base url to make requests to the movie database. */
const instance = axios.create({
    // eg: https://api.themoviedb.org/3/trending/all/week?api_key=a4e01e75559e7ce658eaeb6bd0bd5610&language=en-US
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;