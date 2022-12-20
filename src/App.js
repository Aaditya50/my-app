import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Updated name="thomas" />
      <Updated name="Jerry" />
    </div>
  );
}

function Updated( {name} ){
  return (
    <div>
          <img src="https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <h1>Car: {name} </h1>
          <p>
            Ford Mustang Shelby GT 500
          </p>
    </div>
  );
}



export default App;
