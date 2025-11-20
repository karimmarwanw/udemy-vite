import React from 'react';
import './CourseSection.css';

function CourseSection({ title, description, courses }) {
  return (
    <div className="course-section">
      <h2 className="course-section__title">{title}</h2>
      {description && <p className="course-section__description">{description}</p>}
      <div className="course-section__grid">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <div className="course-card__image-wrapper">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="course-card__image"
              />
              {course.badge && (
                <span className="course-card__badge">{course.badge}</span>
              )}
            </div>
            <h3 className="course-card__title">{course.title}</h3>
            <p className="course-card__instructor">{course.instructor}</p>
            <div className="course-card__rating-row">
              <span className="course-card__rating-value">{course.rating.toFixed(1)}</span>
              <span className="course-card__rating-stars">★★★★☆</span>
              <span className="course-card__rating-count">
                ({course.ratingCount.toLocaleString()})
              </span>
            </div>
            <div className="course-card__price">{course.price}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CourseSection;
