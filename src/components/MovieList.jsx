import React from 'react'
import { moviesList } from './data'
import Movie from './MovieCard';

const MovieList = ({ searchWord }) => {
    return (
        <div className='grid gap-4 grid-cols-8 overflow-hidden  justify-items-center mt-10 '>
            {moviesList
                .filter((moviesList) => {
                    if (searchWord === '') {
                        return moviesList;
                    } else if (
                        moviesList.title.toLowerCase().includes(searchWord.toLowerCase())
                    ) {
                        return moviesList;
                    }
                    return null;
                })
                .map((moviesList) => (
                    <Movie {...moviesList} key={moviesList.id} />
                )
                )}
        </div>
    )
}

export default MovieList;
