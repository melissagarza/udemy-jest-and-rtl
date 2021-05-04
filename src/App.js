import { React, useState } from 'react';
import './App.css';

const App = () => {

  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);

  const onClickChangeToBlue = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  };

  const onClickCheckbox = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => onClickChangeToBlue()}
        disabled={disabled}
      >
        Change to {buttonColor === 'blue' ? 'red' : 'blue'}
      </button>
      <input
        type="checkbox"
        onClick={() => onClickCheckbox()}
      ></input>
    </div>
  );
};

export default App;
