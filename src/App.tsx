import React from 'react';
import BlogPosts from './components/BlogPosts';
import Features from './components/Features';
import JoinUs from './components/JoinUs';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="w-screen bg-primary">
      <Navbar />
      <Main />
      <Features />
      <JoinUs />
      <BlogPosts />
    </div>
  );
};

export default App;
