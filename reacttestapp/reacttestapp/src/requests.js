const API_KEY = "a4e01e75559e7ce658eaeb6bd0bd5610";

const requests = {
    fetchFourtyTwo: "https://preview.redd.it/favakyd148l91.png?width=960&crop=smart&auto=webp&s=87d19d536e45e5a47918e7d74d9969ed468634ef",
    fetchFox: "https://miro.medium.com/v2/resize:fit:1400/1*M7_GzV-glZaZLNuSiNdiPQ.png",
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests 