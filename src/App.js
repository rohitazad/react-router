import React from 'react';
import './App.css';
import MainComponent from './Containers/Main/index';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <Router>
      <MainComponent />
    </Router>
  );
}

export default App;
