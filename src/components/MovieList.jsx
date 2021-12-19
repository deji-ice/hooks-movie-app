import React from 'react'
import {moviesList} from './data'
import Movie from './MovieCard';
const MovieList = () => {
    return (
        <div className='app2'>
            {moviesList.map((moviesList) => (
            <Movie {...moviesList} key={moviesList.id} />
          ))}
        </div>
    )
}

export default MovieList;
