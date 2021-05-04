import { React, useState } from 'react';
import './App.css';

const App = () => {

  const [ buttonColor, setButtonColor ] = useState('red');

  const onClickChangeToBlue = e => {
    e.preventDefault();
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={e => onClickChangeToBlue(e)}>
        Change to {buttonColor === 'blue' ? 'red' : 'blue'}
      </button>
    </div>
  );
};

export default App;
