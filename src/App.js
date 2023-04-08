import { Game } from "./Game";
import { SudokuProvider } from "./context/SudokuContext";

import "./App.css";

function App() {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}

export default App;
