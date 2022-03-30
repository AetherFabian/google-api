import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MapContainer from './components/mapContainer';

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route exact path = '/' element={<MapContainer/>}/>
      </Routes>
    </Router>
  );
}

export default App

