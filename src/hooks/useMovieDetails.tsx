import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[]

}

export const useMovieDetails = (movieId: number) => {

  const [movieDetail, setMovieDetail] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })


  const getMovieDetails = async () => {
    const resMovieDetails = await movieDB.get<MovieFull>(`/${movieId}`)
    const resMovieCredits = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

    const [ movieDetailsRes, castPromiseRes ] = await Promise.all([resMovieDetails, resMovieCredits])

    setMovieDetail({
      isLoading: false,
      movieFull: movieDetailsRes.data,
      cast: castPromiseRes.data.cast
    })

  }

  useEffect(() => {
    getMovieDetails()
  }, [])
  

  return {
    ...movieDetail
  }
};
