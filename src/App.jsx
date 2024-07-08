import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Player from './Pages/Player/Player';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
