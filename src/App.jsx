import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CategoryRow from './components/CategoryRow.jsx';
import CourseSection from './components/CourseSection.jsx';
import TopicsSection from './components/TopicsSection.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';

import { categories, featuredCourses, topics, companies } from './data/dummyData.js';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <section className="page-section">
          <CategoryRow categories={categories} />
        </section>
        <section className="page-section">
          <CourseSection
            title="Students are viewing"
            description="Courses that are popular and highly rated right now."
            courses={featuredCourses}
          />
        </section>
        <section className="page-section">
          <TopicsSection topics={topics} />
        </section>
        <section className="page-section">
          <TrustedCompanies companies={companies} />
        </section>
      </main>
    </div>
  );
}

export default App;
