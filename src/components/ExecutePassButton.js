import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';
import Card from './Card';

export default function ExecutePassButton({ passCard, setFrom, from, to }) {
  const { selectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
