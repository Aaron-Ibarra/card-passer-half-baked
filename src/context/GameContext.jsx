import { useState, createContext } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  function passCard(card) {
    const fromHand = playerHands[from - 1] || deck;
    const toHand = playerHands[to - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);

    setSelectedCard(null);
  }

  return (
    <GameContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
