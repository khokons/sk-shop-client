import React from 'react';
import './Hero.css'
import hero_img from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero_img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Latest Collection</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;