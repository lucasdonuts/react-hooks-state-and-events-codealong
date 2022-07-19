import React, { useState } from "react";

function Toggle() {
  const [isOn, setState] = useState(false);

  const toggleState = () => {
    setState( isOn => !isOn);
  }

  const color = isOn ? 'red' : 'white';

  return(
    <button onClick={ toggleState } style={{ background: color }}>
      { isOn ? 'ON' : 'OFF' }
    </button>
  )
}

export default Toggle;
