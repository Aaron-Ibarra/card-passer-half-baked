import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton() {
  const { selectedCard, setFrom, from, to, passCard, setSelectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} setSelectedCard={setSelectedCard} /> from{' '}
      {/* ASK ABOUT THIS TOMORROW */}
      {from} to {to}
    </div>
  );
}
