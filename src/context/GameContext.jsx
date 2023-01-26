import { useState, createContext } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();

  function passCard(card) {
    setSelectedCard(null);
  }

  return (
    <GameContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
