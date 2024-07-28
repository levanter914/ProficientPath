// src/App.jsx
import React from 'react';
import Questionnaire from "./components/Questionnaire.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to ProficientPath</h1>
        <p>Your personalized learning journey starts here!</p>
      </header>
      <main>
        <Questionnaire />
      </main>
    </div>
  );
}

export default App;
