import './App.css';
import React from 'react';
import {moviesList} from './components/data'
import { useState } from 'react';
import MovieCard from "./components/MovieCard";
import AddMovie from "./components/AddMovie";
import Ratings from './components/Ratings';

function App() {
  const handleSubmit = (e) => {e.preventDefault()};
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovie] = useState([    ])
  const [rating, setRating] = useState('');
  const handleChange = (e) =>{
    setSearchWord(e.target.value);
  }
  return (
    <>
    <header>
    <h1 className='vues'><i>Vues</i></h1>
      <form onSubmit={handleSubmit}>
        <input className='search' type="search" placeholder='search...'
        value={searchWord}
        onChange={handleChange}/>
        </form>
        <Ratings {...moviesList}/>
        <AddMovie />
      </header>
    <div className="App">
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
            <MovieCard {...moviesList} key={moviesList.id} />
          )
          )}
    </div>
    </> 
  );
}

export default App;
