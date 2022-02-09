import React from 'react';
import './app.css';

const App = () => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className='grid'>
      <div className='col'>
        <span className='row' onClick={handleClick(e)}>
          1
        </span>
        <span className='row' onClick={handleClick(e)}>
          2
        </span>
        <span className='row' onClick={handleClick(e)}>
          3
        </span>
      </div>
      <div className='col'>
        <span className='row'>4</span>
        <span className='row'>5</span>
        <span className='row'>6</span>
      </div>
      <div className='col'>
        <span className='row'>7</span>
        <span className='row'>8</span>
        <span className='row'>9</span>
      </div>
    </div>
  );
};

export default App;
