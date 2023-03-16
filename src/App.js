import React from "react";
import { moviesList } from "./components/data";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import AddMovie from "./components/AddMovie";
import Ratings from "./components/Ratings";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovie] = useState([]);
  const [rating, setRating] = useState("");
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <div className="">
      <NavBar />
      <div className=" ">
        <MovieList searchWord={searchWord}/>
      </div>
    </div>
  );
}

export default App;
