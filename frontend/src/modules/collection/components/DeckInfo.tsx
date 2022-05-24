import React from 'react';
import Deck from '../../../common/classes/Deck';
import '../styles/decks.css';

export interface DeckInfoProps {
    deck: Deck
    handleClick: () => void
}

function DeckInfo({
  deck,
  handleClick,
}: DeckInfoProps) {
  return (
    <div onClick={handleClick} className="deck-info" aria-hidden="true">
      <div className="deck-info-title"><b>{deck.name}</b></div>
      <div className="deck-info-description">{deck.description}</div>
    </div>
  );
}

export default DeckInfo;
