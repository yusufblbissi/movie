import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import PaginationComponent from "./PaginationComponent";
const MovieList = ({ movies, getPage, pageCount }) => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center gap-2 ">
        {movies.length > 1 ? (
          movies.map((movie) => {
            return (
              <Row>
                <MovieCard key={movie.id} movieDetails={movie} />
              </Row>
            );
          })
        ) : (
          <h1>No Movies</h1>
        )}
      </div>
      <PaginationComponent getPage={getPage} pageCount={pageCount} />
    </div>
  );
};

export default MovieList;
