import Block from "./components/Block";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<string>("X");

  const checkWinner = (state: any[]):boolean => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (index: number) => {
   
    const stateCopy = [...state];
    
   
    if (stateCopy[index] !== null || checkWinner(stateCopy)) {
      return;
    }
    
    
    stateCopy[index] = currentTurn;
  
    
    const winner = checkWinner(stateCopy);
    if (winner) {
      setState(stateCopy); 
      setTimeout(() => {
        alert(`${currentTurn} won the game`);
      }, 100); 
      return;
    }
  
    if (!stateCopy.includes(null)) {
      setState(stateCopy); 
      setTimeout(() => {
        alert("It's a draw!");
      }, 100); 
      return;
    }
  
    // Update the current turn and state
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };
  

  console.log(state);

  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="main">
      <h1>TIC TAC TOE</h1>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleClick(0)} value={state[0]} />
          <Block onClick={() => handleClick(1)} value={state[1]} />
          <Block onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleClick(3)} value={state[3]} />
          <Block onClick={() => handleClick(4)} value={state[4]} />
          <Block onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleClick(6)} value={state[6]} />
          <Block onClick={() => handleClick(7)} value={state[7]} />
          <Block onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"10px",
        }}
      >
        <button onClick={handleReset} style={{
          padding:"10px 20px",
          backgroundColor:"black",
          color:"white",
          outline:"none",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
