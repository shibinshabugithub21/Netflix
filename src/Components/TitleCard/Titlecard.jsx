import React, { useEffect, useState } from 'react';
import './TitleCard.css';
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjBhZjQ0ZTMxMzU3MTVmMTQ3YTU4ZGNiZjU1NDdjYSIsIm5iZiI6MTcyMDE4OTQ0Mi4yNjMwMDksInN1YiI6IjY2ODgwMGFjZjkwZmJhMDU2N2IzMzUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01P0irfh9HrtGXFhWnKhct_KZ06knFsfzMyVlBYgPS4'
    }
  };

  useEffect(() => {
    let url = '';
    switch (category) {
      case 'kids':
        url = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1';
        break;
      case 'tv':
        url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
        break;
      case 'documentary':
        url = 'https://api.themoviedb.org/3/discover/movie?with_genres=99&language=en-US&page=1';
        break;
      case 'animation':
        url = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1';
        break;
      case 'biography':
        url = 'https://api.themoviedb.org/3/discover/movie?with_genres=36&language=en-US&page=1';
        break;
      case 'top_tv':
        url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`;
        break;
      default:
        url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
        break;
    }

    fetch(url, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className="card-list">
        {apiData.map((card, index) => (
          <Link className="card" to={`/player/${card.id}`} key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title || card.name} />
            <p>{card.original_title || card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
