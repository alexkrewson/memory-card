
import './app.css';
// import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import DisplayCards from './components/DisplayCards';


function App() {




  return (
    <div className="app">
      <DisplayCards tasks={['do this', 'do that']} />
    </div>
  );
}

export default App;
