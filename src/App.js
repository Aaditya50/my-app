import "./App.css";

import {useState} from "react";

function App() {
  let username = "Aaditya";
  let password = "Joshi";
  let values = "Submit";

  let [count,setCount] = useState(1);

  let bro = () => alert;
  let increment = () => {
    count = count+1;
    console.log(count);
    setCount(count);
  } ;
  let decrement = () => {
    count = count-1;
    console.log(count);
    setCount(count);
  } ;

  return (
    <div>
      <p>Username :- {username} </p>
      <p>Password :- {password} </p>

      <h1>{count}</h1>

      <input type="button" value={values} onClick={bro}  />

      <input type="button" value="Increment" onClick={increment} />

      <input type="button" value="Decrement" onClick={decrement} />

    
    
    </div>

    
  );
    
}

export default App;
