import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const navigate = useNavigate();
  const onMovieClick = (id) => () => {
    navigate(`movies/${id}`)
  }


  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails onMovieClick={onMovieClick(movie.id)} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;
  const { onMovieClick } = props

  return (


    <MovieCard onMovieClick={onMovieClick} movie={props.movie} />
  );
}
