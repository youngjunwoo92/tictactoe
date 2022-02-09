import React from 'react';
import styles from './square.module.css';

const Square = ({ value, handleClick }) => {
  return (
    <div className={styles.square} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Square;
