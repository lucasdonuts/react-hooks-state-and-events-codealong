import React, { useState } from "react";

function Toggle() {
  const [state, setState] = useState('OFF');

  const toggleState = () => {
    setState( state => state = state === 'OFF' ? 'ON' : 'OFF')
  }

  return <button onClick={ toggleState }>{ state }</button>;
}

export default Toggle;
