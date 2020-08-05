import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="page-container">
        <NavBar />
        <Header />
        <MainSection />
      </div>
    </>
  );
}

export default App;
