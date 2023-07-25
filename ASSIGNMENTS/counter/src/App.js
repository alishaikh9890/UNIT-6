import React from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = React.useState(0)

  const handleIncrement =(value) => {
  setCounter(counter + value)
  }

  const handleMultiply = value =>{
    setCounter(counter * value)
  }
  
  return (
    <div className="App">
     <h1>Counter</h1>
      {counter%2==1 ?  <h1 style={{color:"red"}}>{counter}</h1> :  <h1 style={{color:"green"}}>{counter}</h1>}
   
  <button onClick={ () => handleIncrement(1)}>Increment</button>
  <button onClick={ () => handleIncrement(-1)}>Decreament</button>
  <button onClick={ () => handleMultiply(2)}>double</button>
    </div>
  );
}

export default App;
