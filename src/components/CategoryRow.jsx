import React from 'react';
import './CategoryRow.css';

function CategoryRow({ categories }) {
  return (
    <div className="category-row">
      {categories.map((category) => (
        <button key={category.id} className="category-row__item">
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryRow;
