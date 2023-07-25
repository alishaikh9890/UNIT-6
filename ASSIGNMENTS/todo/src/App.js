
import './App.css';
import React from "react"
import List from "./List.js"

function App() {

const [counter, setCounter]= React.useState(20)

const [details, setDetails]= React.useState("SHOW MORE DETAILS")

const handleChange= (value) =>{
setCounter(counter+value)
}


const Details =(v) => {
 if(details=="SHOW MORE DETAILS"){
  setDetails("HIDE MORE DETAILS")
 }
 else if(details=="HIDE MORE DETAILS"){
  setDetails("SHOW MORE DETAILS")
 }
}

  return (
    <div className="App">
      <div className='Profile'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPT2rDdS2mqmvOrCi8l7gutEQuqqsFyzOzKgHtW1MKg&s' alt=''/>
      <h2>Name: Alishan Shaikh</h2>
      <h2>Age: {counter}</h2>

      <button onClick={()=> handleChange(1)}>INCREASE AGE</button>
      <button onClick={()=> handleChange(-1)} >DECREASE AGE</button>
      <button onClick={() =>Details()}>{details}</button> 
      {details=="HIDE MORE DETAILS" ?  <div><h2>Location: Pune</h2><h2>Organization:"MASAI"</h2></div> : <div></div>}
    
      </div>

      <div className='todo'>
       <List />
      </div>
      
    </div>
  );
}

export default App;
