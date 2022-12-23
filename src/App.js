import {useState} from "react";

function App() {
  
  let [theme,setTheme] = useState("primary");
  let primaryThm = () => {
    theme ="primary";
    setTheme(theme);
  }
  let successThm = () => {
    theme = "success";
    setTheme(theme);
  }
  let dangerThm = () => {
    theme = "danger";
    setTheme(theme);
  };


  return (
    <div>
      <div className="sticky-top" >
        <h1 className={`bg-${theme} text-light p-3 `}>
          Dynamic BootStrap Classes {theme}
        </h1>
        <input
          className="btn btn-primary"
          type="button"
          value="primary"
          onClick={primaryThm}
        />
        <input
          className="btn btn-success"
          type="button"
          value="success"
          onClick={successThm}
        />
        <input
          className="btn btn-danger"
          type="button"
          value="danger"
          onClick={dangerThm}
        />
      </div>
    </div>
  );
  

  
    
}
 
export default App;
