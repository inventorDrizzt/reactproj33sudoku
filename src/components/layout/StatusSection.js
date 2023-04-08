import React from "react";
import { Difficulty } from "../Difficulty";
import { Action } from "../Action";

/**
 * React component for the Status Section.
 */
export const StatusSection = (props) => {
  return (
    <section className="status">
      <Difficulty onChange={props.onChange} />
      <div className="status__actions">
        <Action action="undo" onClickAction={props.onClickUndo} />
        <Action action="erase" onClickAction={props.onClickErase} />
      </div>
    </section>
  );
};
