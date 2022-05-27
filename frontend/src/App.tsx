import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardCreation from './modules/collection/components/CardCreation';
import CollectionContainer from './modules/collection/containers/CollectionContainer';
import DeckContainer from './modules/collection/containers/DeckContainer';
import DeckListContainer from './modules/collection/containers/DeckListContainer';
import PickCardContainer from './modules/collection/containers/PickCardContainer';
import Navbar from './modules/common/components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CollectionContainer />} />
        <Route path="decks" element={<DeckListContainer />} />
        <Route path="decks/:deckId" element={<DeckContainer />} />
        <Route path="decks/add/:deckId" element={<PickCardContainer />} />
        <Route path="card/new" element={<CardCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
