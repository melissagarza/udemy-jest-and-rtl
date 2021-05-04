import { React, useState } from 'react';
import './App.css';

const App = () => {

  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);

  const onClickChangeToBlue = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  };

  const onClickCheckbox = e => {
    setDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => onClickChangeToBlue()}
        disabled={disabled}
      >
        Change to {buttonColor === 'blue' ? 'red' : 'blue'}
      </button>
      <label
        htmlFor="checkbox-disable-button"
      >Disable button</label>
      <input
        type="checkbox"
        id="checkbox-disable-button"
        onChange={e => onClickCheckbox(e)}
        defaultChecked={disabled}
        aria-checked={disabled}
      />
    </div>
  );
};

export default App;
