import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CollectionContainer from './modules/collection/containers/CollectionContainer';
import Navbar from './modules/common/components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CollectionContainer />} />
        <Route path="decks" element={<div>Decks</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
