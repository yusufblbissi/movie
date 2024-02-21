import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ movieDetails }) => {
  return (
    <Col>
      <Link to={`/movie/${movieDetails.id}`}>
        <div className="card">
          <img
            alt="img"
            src={`https://image.tmdb.org/t/p/w500` + movieDetails.poster_path}
            className="card__image"
          ></img>

          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>{movieDetails.title}</p>
              <p>{movieDetails.release_date}</p>
              <p>View Count: {movieDetails.vote_count}</p>
              <p>Rate: {movieDetails.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
