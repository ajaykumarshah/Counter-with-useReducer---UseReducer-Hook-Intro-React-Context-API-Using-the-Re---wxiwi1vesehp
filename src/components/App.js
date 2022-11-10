import React, { useReducer, useState } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div id="main">
      <span id='counter'>{state}</span>
      <br />

      <button onClick={() => dispatch("INCREMENT")} id="increment-btn">INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")} id="decrement-btn" >Decrement</button>
    </div>
  )
}


export default App;
