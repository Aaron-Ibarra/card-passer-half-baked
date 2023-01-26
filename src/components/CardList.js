import React from 'react';
import Card from './Card';

export default function CardList({ cards, player, setFrom }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.suit + card.value} player={player} setFrom={setFrom} card={card} />
      ))}
    </div>
  );
}
