import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Titlecard from '../../Components/TitleCard/Titlecard';
import Footer from '../../Components/Footer/Footer';
import hero from '../../assets/Banner.jpg';
import hero_title from '../../assets/Banner_title.png';
import play_button from '../../assets/play-button.png';
import info_button from '../../assets/info-button.png';
import trailerVideo from '../../assets/trailer.mp4'; 

const Home = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleMouseEnter = () => {
    setShowTrailer(true);
  };

  const handleMouseLeave = () => {
    setShowTrailer(false);
  };

  const handlePlayClick = () => {
    setShowTrailer(true);
  };

  return (
    <div className='home'>
      <Navbar />
      <div
        className='hero'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!showTrailer ? (
          <img src={hero} alt="Banner" className='banner-img' />
        ) : (
          <video autoPlay controls className='banner-video'>
            <source src={trailerVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="hero-caption">
          <img src={hero_title} alt="Banner Title" className='caption-img' />
          <p>In a dystopian future devastated by air pollution, the survival of humanity depends on the Black Knights — and they’re far from your average deliverymen.</p>
          <div className="hero-btns">
            <button className='btn play-btn' onClick={handlePlayClick}>
              <img src={play_button} alt="Play button" />
              Play
            </button>
            <button className='btn info-btn'>
              <img src={info_button} alt="Information button" />
              Info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <Titlecard title={"Popular on Netflix"} category={"popular"} />
        <Titlecard title={"Blockbuster Movies"} category={"now_playing"} />
        <Titlecard title={"Only on Netflix"} category={"top_rated"} />
        <Titlecard title={"Upcoming"} category={"upcoming"} />
        <Titlecard title={"Kids"} category={"kids"} />
        <Titlecard title={"TV Series"} category={"tv"} />
        <Titlecard title={"Documentaries"} category={"documentary"} />
        <Titlecard title={"Animations"} category={"animation"} />
        <Titlecard title={"Autobiographies"} category={"biography"} />
        <Titlecard title={"Top TV Series"} category={"top_tv"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
