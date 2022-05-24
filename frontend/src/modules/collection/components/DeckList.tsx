import React from 'react';
import Deck from '../../../common/classes/Deck';
import '../styles/decks.css';
import DeckInfo from './DeckInfo';

export interface DecksProps {
    decks: Deck[],
    // eslint-disable-next-line
    onOpenDeck: (decklId: number) => void
}

function DeckList({
  decks,
  onOpenDeck,
}: DecksProps) {
  return (
    <div className="decks-box">
      {decks.map((deck) => (
        <DeckInfo handleClick={() => { onOpenDeck(deck.id); }} key={deck.id} deck={deck} />
      ))}
    </div>
  );
}

export default DeckList;
