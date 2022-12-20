
import {useState} from "react";




function App() {
  let [city, setcity] = useState([]);

  let addItems = () => {
    let textref = document.querySelector("#txt1");

    let newCity = [textref.value , ...city];

    setcity(newCity);
  };

  return (
    <div>

      <input type="text" name="" id="txt1" />
      <input type="button" value="Add City to list"  onClick={addItems}  />

      {city.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
    
}

export default App;
