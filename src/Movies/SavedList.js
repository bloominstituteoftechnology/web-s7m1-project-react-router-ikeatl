import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function SavedList(props) {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, idx) => (
        <span key={idx} className="saved-movie">{movie.title}</span>
      ))}

      <div onClick={onHomeClick} className="home-button">Home</div>
    </div >
  );
}
