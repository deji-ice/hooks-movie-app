import React, { useState } from "react";
import AddMovie from "./AddMovie";
import Ratings from "./Ratings";
import { moviesList } from "./data";


const NavBar = () => {
    const [searchWord, setSearchWord] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        setSearchWord(e.target.value);
    };

    return(
         <div className="bg-[yellow] flex flex-row items-center justify-between pl-10 pr-10 ">
        <h1 className="">Attacker.tv</h1>
        <div className="flex-row flex items-center space-x-10">
        <form onSubmit={handleSubmit}>
            <input
                className="bg-transparent border-2 border-black rounded-2xl p-[0.19rem] text-black"
                type="search"
                placeholder="search..."
                value={searchWord}
                onChange={handleChange}
            />
        </form>
        <Ratings {...moviesList} />
        <AddMovie />
        </div>
    </div>)
};

export default NavBar;
