import React from 'react';
import './TopicsSection.css';

function TopicsSection({ topics }) {
  return (
    <div className="topics">
      <h2 className="topics__title">Topics recommended for you</h2>
      <div className="topics__grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topics__card">
            <h3 className="topics__card-title">{topic.name}</h3>
            <p className="topics__card-description">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsSection;
