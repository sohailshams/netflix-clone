import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-content">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
          <h1 className="banner-description">{movie?.overview}</h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
