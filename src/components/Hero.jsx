import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Learning that fits your life</h1>
        <p className="hero__subtitle">
          Courses to help you build skills in development, business, data science, and more.
        </p>
        <div className="hero__search">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="hero__search-input"
          />
          <button className="hero__search-button">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
