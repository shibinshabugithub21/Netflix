import React, { useEffect, useState } from 'react';
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';
import Back from '../../assets/back.png';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjBhZjQ0ZTMxMzU3MTVmMTQ3YTU4ZGNiZjU1NDdjYSIsIm5iZiI6MTcyMDE4OTQ0Mi4yNjMwMDksInN1YiI6IjY2ODgwMGFjZjkwZmJhMDU2N2IzMzUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01P0irfh9HrtGXFhWnKhct_KZ06knFsfzMyVlBYgPS4'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results.length > 0) {
          const videoData = response.results.find(video => video.type === "Trailer");
          setApiData({
            name: videoData.name,
            key: videoData.key,
            published_at: videoData.published_at || "N/A",
            type: videoData.type
          });
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={Back} alt="Back" onClick={() => navigate(-1)} />
      {apiData.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title={apiData.name}
          height='90%'
          width='90%'
          allowFullScreen
          frameBorder="0">
        </iframe>
      ) : (
        <p>Trailer not available</p>
      )}
      <div className="player-info">
        <p>Published Date: {apiData.published_at.slice(0, 10)}</p>
        <p>Name: {apiData.name}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
