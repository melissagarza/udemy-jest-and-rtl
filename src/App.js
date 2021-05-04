import { React, useState } from 'react';
import './App.css';

export const replaceCamelCaseWithSpaces = colorName => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {

  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ disabled, setDisabled ] = useState(false);

  const onClickChangeToBlue = () => {
    setButtonColor(buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed');
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
        Change to {buttonColor === 'MediumVioletRed' ? (
          <>
            {replaceCamelCaseWithSpaces('MidnightBlue')}
          </>
        ) : (
          <>
            {replaceCamelCaseWithSpaces('MediumVioletRed')}
          </>
        )}
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
