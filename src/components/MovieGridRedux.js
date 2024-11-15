// // src/components/MovieGridRedux.js
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies } from "../redux/movieActions";
// import "./MovieGrid.css";

// const MovieGridRedux = ({ category }) => {
//   const dispatch = useDispatch();
//   const movies = useSelector((state) => state.movies[category]);

//   useEffect(() => {
//     dispatch(fetchMovies(category));
//   }, [dispatch, category]);

//   return (
//     <div className="movie-grid">
//       <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
//       {movies.map((movie) => (
//         <div key={movie.id} className="movie-card">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <h3>{movie.title}</h3>
//           <p>{movie.release_date}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieGridRedux;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import "./MovieGrid.css";

// Function to get the appropriate rating class based on the rating value
const getRatingClass = (rating) => {
  if (rating >= 7) return "high-rating";
  if (rating >= 4) return "medium-rating";
  return "low-rating";
};

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[category]);

  useEffect(() => {
    dispatch(fetchMovies(category));
  }, [dispatch, category]);

  return (
    <div className="movie-grid">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <div className={`movie-rating ${getRatingClass(movie.vote_average)}`}>
            <span>Rating: {movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGridRedux;
