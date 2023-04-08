import React from "react";

/**
 * React component for the Header Section.
 */
export const Header = (props) => {
  return (
    <header className="header">
      <h1>Sudoku Game</h1>
      <h2 onClick={props.onClick}>
        <span>New Game</span>
      </h2>
    </header>
  );
};
