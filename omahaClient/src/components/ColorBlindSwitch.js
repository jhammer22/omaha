import React, { useState } from 'react';
import M from 'materialize-css';

function ColorblindSwitch({preferedColor,handleColorChange}) {
  const [colorblindMode, setColorblindMode] = useState('normal');

  function handleChange(event) {
    const mode = event.target.value;
    setColorblindMode(mode);
    updateColorblindMode(mode);
    handleColorChange(mode);

  }

  function updateColorblindMode(mode) {
    switch (mode) {
      case 'protanopia':
        M.updateTextFields();
        //M.updateSliderLabels();
        //M.updatePopout();
        // add other Materialize components that need to be updated
        break;
      case 'deuteranopia':
        M.updateTextFields();
        // M.updateSliderLabels();
        // M.updatePopout();
        // add other Materialize components that need to be updated
        break;
      case 'tritanopia':
        M.updateTextFields();
        // M.updateSliderLabels();
        // M.updatePopout();
        // add other Materialize components that need to be updated
        break;
      default:
        M.updateTextFields();
        // M.updateSliderLabels();
        // M.updatePopout();
        // add other Materialize components that need to be updated
        break;
    }
  }

  return (
    <div>
      <p>Select colorblind mode:</p>
      <div>
        <label>
          <input
            type="radio"
            value="normal"
            checked={colorblindMode === 'normal'}
            onChange={handleChange}
          />
          <span>Normal</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="protanopia"
            checked={colorblindMode === 'protanopia'}
            onChange={handleChange}
          />
          <span>Protanopia</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="deuteranopia"
            checked={colorblindMode === 'deuteranopia'}
            onChange={handleChange}
          />
          <span>Deuteranopia</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="tritanopia"
            checked={colorblindMode === 'tritanopia'}
            onChange={handleChange}
          />
          <span>Tritanopia</span>
        </label>
      </div>
    </div>
  );
}

export default ColorblindSwitch;