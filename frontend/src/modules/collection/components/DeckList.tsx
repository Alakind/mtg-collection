import React from 'react';
import Deck from '../../../common/classes/Deck';
import '../styles/decks.css';
import DeckInfo from './DeckInfo';

export interface DecksProps {
    decks: Deck[]
}

function DeckList({
  decks,
}: DecksProps) {
  return (
    <div className="decks-box">
      {decks.map((deck) => (
        <DeckInfo key={deck.id} deck={deck} />
      ))}
    </div>
  );
}

export default DeckList;
