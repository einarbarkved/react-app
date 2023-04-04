import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      gear: ["Gloves"],
    },
  });

  const handleClick = () => {
    setGame(
      produce((draft) => {
        draft.player.name = "Einar";
      })
    );
    setGame(
      produce((draft) => {
        draft.player.gear.push("Boots");
      })
    );
  };

  return (
    <div>
      {game.player.name}
      {game.player.gear.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
