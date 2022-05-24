import React from 'react';
import Deck from '../../../common/classes/Deck';
import '../styles/decks.css';

export interface DeckInfoProps {
    deck: Deck
}

function DeckInfo({
  deck,
}: DeckInfoProps) {
  return (
    <div className="deck-info">
      <div className="deck-info-title"><b>{deck.name}</b></div>
      <div className="deck-info-description">{deck.description}</div>
    </div>
  );
}

export default DeckInfo;
