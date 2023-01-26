import './App.css';
import initialCards from './cards-data';
import Player from './components/Player';
import CardList from './components/CardList';
import { useContext, useState } from 'react';
import ExecutePassButton from './components/ExecutePassButton';
import { GameContext } from './context/GameContext.jsx';

function App() {
  const { selectedCard } = useContext(GameContext);

  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  function findCardIndex(value, suit, cards) {
    return cards.findIndex((card) => card.value === value && card.suit === suit);
  }

  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);
  }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={1} hand={playerOneHand} setFrom={setFrom} setTo={setTo} />
        <Player to={to} player={2} hand={playerTwoHand} setFrom={setFrom} setTo={setTo} />
        <Player to={to} player={3} hand={playerThreeHand} setFrom={setFrom} setTo={setTo} />
        <CardList cards={deck} setFrom={setFrom} player={'deck'} />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton passCard={passCard} setFrom={setFrom} from={from} to={to} />
        )}
      </section>
    </div>
  );
}

export default App;
