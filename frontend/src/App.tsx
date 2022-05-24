import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CollectionContainer from './modules/collection/containers/CollectionContainer';
import DeckContainer from './modules/collection/containers/DeckContainer';
import DeckListContainer from './modules/collection/containers/DeckListContainer';
import Navbar from './modules/common/components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CollectionContainer />} />
        <Route path="decks" element={<DeckListContainer />} />
        <Route path="decks/:deckId" element={<DeckContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
