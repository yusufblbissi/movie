import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, serPageCount] = useState(0);

  // GET ALL MOVIE
  const getAllMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovies(res.data.results);
    serPageCount(res.data.total_pages);
  };

  // GET Current Page
  const getPage = async (page) => {
    console.log(page);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setMovies(res.data.results);
  };

  const searchMovie = async (movieS) => {
    if (movieS === "") {
      getAllMovie();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieS}&language=en`
      );

      setMovies(res.data.results);
      serPageCount(res.data.total_pages);
    }
  };
  useEffect(() => {
    getAllMovie();
  }, []);
  return (
    <div>
      <NavBar searchMovie={searchMovie} />
      <Container className="my-4">
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <MovieList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
