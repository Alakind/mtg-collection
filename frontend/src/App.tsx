import React from 'react';
import Card from './common/classes/Card';
import CardMedium from './modules/collection/components/CardMedium';

function App() {
  const card = new Card(1);

  return (
    <div className="App">
      <header className="App-header">
        <CardMedium card={card} />
      </header>
    </div>
  );
}

export default App;
