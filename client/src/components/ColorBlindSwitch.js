import React, { useState } from 'react';
import M from 'materialize-css';
import { Link } from "react-router-dom";
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
        <Link to="/profile1">
          <input
            type="radio"
            value="normal"
            checked={colorblindMode === 'normal'}
            onChange={handleChange}
            /></Link>
          <span>Normal</span>
        </label>
      </div>
      <div>
        <label>
        <Link to="/cbr">
          <input
           
            type="radio"
            value="protanopia"
            checked={colorblindMode === 'protanopia'}
            onChange={handleChange} 
          /></Link>
          <span>Protanopia</span>
        </label>
      </div>
      <div>
        <label>
        <Link to="/cbg">
          <input
            type="radio"
            value="deuteranopia"
            checked={colorblindMode === 'deuteranopia'}
            onChange={handleChange}
          /></Link>
          <span>Deuteranopia</span>
        </label>
      </div>
      <div>
        <label>
        <Link to="/cbrg">
          <input
            type="radio"
            value="tritanopia"
            checked={colorblindMode === 'tritanopia'}
            onChange={handleChange}
            /></Link>
          <span>Deuteranomly</span>
        </label>
      </div>
    </div>
  );
}

export default ColorblindSwitch;