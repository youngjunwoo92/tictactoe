import React, { useState } from 'react';
import Square from '../square/square';
import styles from './board.module.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] != null) return;
    const newBoard = [...board];
    newBoard[index] = isX ? 'X' : 'O';
    setBoard(newBoard);
    setIsX((prev) => !prev);
  };

  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;
