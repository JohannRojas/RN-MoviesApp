import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params : {
    api_key: 'f7924594aa2a667826d8005aa7f217af',
    language: 'en-US'
  }
})

export default movieDB;