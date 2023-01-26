import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, setFrom, from, to } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
