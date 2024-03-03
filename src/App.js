import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom"
import MovieList from "../src/Movies/MovieList"
import Movie from "../src/Movies/Movie"


import SavedList from './Movies/SavedList';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          setMovies(response.data)
          // and set the response data as the 'movies' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, [saved]);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once/
    const movie = movies.find(mv => mv.id === Number(id))
    // add that movie to state
    const duplicate = saved.find(savedMovie => savedMovie.id === movie.id)
    if (!duplicate) {
      setSaved([...saved, movie]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="movies/:id/*" element={<Movie addToSavedList={addToSavedList} />} />

      </Routes>
    </div>
  );
}
