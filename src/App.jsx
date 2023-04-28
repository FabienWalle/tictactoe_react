import React, { useState } from "react";
import Cell from "./components/Cell";
import Score from './components/Score'

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [turn, setTurn] = useState(true);

  const handleClick = (index) => {
    if (grid[index] === null) {
      grid[index] = turn ? "O" : "X"
      setGrid(grid);
      setTurn(!turn);
      win();
      draw();
    }
  };

  const win = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        grid[a] &&
        grid[a] === grid[b] &&
        grid[a] === grid[c]
      ) {
        if (grid[a] === "O") {
          setPlayerTwo(playerTwo + 1);
          reset();
        } else if (grid[a] === "X") {
          setPlayerOne(playerOne + 1);
          reset();
        }
      }
    }
  };

  const draw = () => {
    if (!grid.includes(null)) {
      reset();
      setDrawScore(drawScore + 1);
    }
  };

  const reset = () => {
    setGrid(Array(9).fill(null));
    setTurn(true);
  };

  return (
    <div>
      <div id="scores">
        <Score text="Joueur 1" score={playerOne} />
        <Score text="Joueur 2" score={playerTwo} />
        <Score text="Match Nul" score={drawScore} />
      </div>
      <div id="grid">
        <div className="row" id="rowOne">
          <Cell value={grid[0]} onClick={() => handleClick(0)} />
          <Cell value={grid[1]} onClick={() => handleClick(1)} />
          <Cell value={grid[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row" id="rowTwo">
          <Cell value={grid[3]} onClick={() => handleClick(3)} />
          <Cell value={grid[4]} onClick={() => handleClick(4)} />
          <Cell value={grid[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row" id="rowThree">
          <Cell value={grid[6]} onClick={() => handleClick(6)} />
          <Cell value={grid[7]} onClick={() => handleClick(7)} />
          <Cell value={grid[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default App;
