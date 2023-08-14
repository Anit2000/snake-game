import "./Board.css";
import Snake from "./Snake";
import { useState } from "react";
const Board = () => {
  let [blocks, setBlocks] = useState([]);
  let blockArray = [];
  for (let i = 0; i <= 400; i++) {
    blockArray.push({
      snake: i == 0 ? true : false,
      food: false,
    });
  }

  return (
    <div data-role="board">
      {blocks.map((el, ind) => {
        return (
          <span
            key={ind}
            className={
              `${el.food ? "food" : ""}` +
              `${el.snake ? " snake" : ""}` +
              `${!el.snake && !el.food ? " block" : ""}`
            }
          ></span>
        );
      })}
    </div>
  );
};
export default Board;
