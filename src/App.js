import {useState} from "react";

function App() {
  
  let [theme,setTheme] = useState("primary");
  let changeTheme = (item="primary") => {
    theme = item;
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
        //  onClick={primaryThm}
          onClick={ () => changeTheme("primary") }
        />
        <input
          className="btn btn-success"
          type="button"
          value="success"
         // onClick={successThm}
          onClick={ () => changeTheme("success") }
        />
        <input
          className="btn btn-danger"
          type="button"
          value="danger"
          //onClick={dangerThm}
          onClick={ () => changeTheme("danger") }
        />
      </div>
    </div>
  );
  

  
    
}
 
export default App;
