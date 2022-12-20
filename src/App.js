import "./App.css";


function App() {
  
  let mystyle = { color: "white", background: "purple" };

  return (
    <div>
      <h1 className="beautify">Hello Again!</h1>
      {/** This is kind of internal. Note: Only one curly braces. */}
      <h1 style={mystyle}>Hello World</h1>

      {/* THIS IS INLINE STYLING */}
      <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>

      <h1 className="bg-dark text-light p-3">Bootstrap Styling!</h1>

      <h1 className="bg-success" style={{ color: "green" }}>
        hello
      </h1>
    </div>
  );
  
    
}

export default App;
