import './App.css';
import React from 'react';
import { Router,Link } from '@reach/router';
import Home from './Components/Home';
import Number from './Components/Number';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/:id"/>
        <Number path="/:id/:color/:color2"/>
      </Router>
    </div>
  );
}

export default App;
