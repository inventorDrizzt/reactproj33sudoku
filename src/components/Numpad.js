import React from "react";
import { useSudokuContext } from "../context/SudokuContext";

/**
 * React component for the Number Selector in the Status Section.
 */
export const Numpad = ({ onClickNumber, onClose }) => {
  let { numberSelected } = useSudokuContext();

  const numpadCloseHandler = () => {
    onClose();
  };

  return (
    <div onClick={numpadCloseHandler} className="numpad__cont">
      <div className="numpad__modal">
        <h3 className="numpad__heading">
          Select Input <span onClick={numpadCloseHandler}>X</span>
        </h3>
        <div className="numpad__numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
            if (numberSelected === number.toString()) {
              return (
                <div
                  className="numpad__number numpad__number--selected"
                  key={number}
                  onClick={() => onClickNumber(number.toString())}
                >
                  {number}
                </div>
              );
            } else {
              return (
                <div
                  className="numpad__number"
                  key={number}
                  onClick={() => onClickNumber(number.toString())}
                >
                  {number}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
