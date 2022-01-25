import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <pages.Login /> } />
        <Route exact path="/exemplo" element={ <pages.Exemplo /> } />
      </Routes>
    </div>
  );
}

export default App;
