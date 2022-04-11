import React from 'react';
import Card from './common/classes/Card';
import { getCreatureCard } from './mocks/cards';
import CardMedium from './modules/collection/components/CardMedium';

function App() {
  const card: Card = getCreatureCard();

  return (
    <div className="App">
      <header className="App-header">
        <CardMedium card={card} />
      </header>
    </div>
  );
}

export default App;
