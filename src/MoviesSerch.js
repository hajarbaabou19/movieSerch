import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [api, setApi] = useState({
    type: '',
    year: '',
    title: '',
  });

  const handleChange = (e) => {
    setApi({
      ...api,
      [e.target.name]: e.target.value,
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const { type, year, title } = api;

    fetch(`https://www.omdbapi.com/?apikey=6a43f971&type=${type}&y=${year}&s=${title}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search || []);
          console.log(data.Search);
        } else {
          console.error("API Error:", data.Error);
        }
      })
      .catch(error => console.error("Fetch Error:", error));
  }

  return (
    <div>
      <h2>Movies Search</h2>
      
      <form onSubmit={handleSearch}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="year" placeholder="Year" onChange={handleChange} />
        <select name="type" onChange={handleChange}>
          <option value="">Select</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button type="submit">Search</button>
      </form>
      
      <div className="movies-list">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="movies-card">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <Link to={`/movies/${movie.imdbID}`}>Details</Link>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default MoviesSearch;
