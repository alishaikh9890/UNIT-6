import logo from './logo.svg';
import './App.css';

function App() {
  // const styles = {color: "red",textAlign: "center", backgroundColor: "green"}



  return (
    <div >
      {/* <div>
        <h1 style={styles} >Hellow world</h1>
        <h2 style={{color: "red"}}>hellow brother</h2>
        <img src={logo} alt="img" />
        
      </div> */}

   
{["code","eat","sleep", "repeat"].map((todo) => {
  return <Todo todo={todo} />;
})}
    </div>
  );
}

function Todo({ todo }){
  console.log(todo)
return <h1>{todo}</h1>
}


export default App;
