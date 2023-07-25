import React from "react";
import './App.css';
import List from "./List.js"
import Anotherlist from "./Anotherlist.js"
import { useEffect } from "react";

function App() {
     
//get  post put delete patach 
const db = () =>{
  
  fetch(`http://localhost:8080/profile`)
  .then((res)=> res.json())
  //parsed ?? stigifide ??
  .then((data)=>{
    console.log(data)
  })

}

useEffect(()=>{
  db()
},[])

  return (
    <div className="App">
    Hello worl
<img src="logo192.png" alt="img"/>

    <List/> 
    <Anotherlist/>
    </div>
  );
}

export default App;
