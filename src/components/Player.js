import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { setTo, to, setFrom, setSelectedCard, selectedCard } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
