import { useState } from "react";

function App() {
  let [list,setList] = useState([
    { message: "hii", messageTime: new Date() },
    { message: "hii sir", messageTime: new Date() },
    { message: "hii AJ", messageTime: new Date() },
    { message: "hii JerryKing", messageTime: new Date() },
  ]);

  let addMessage = () =>{
    let msg = {message:"chill bhidu",messageTime:new Date()};
    list = [msg , ...list];
    setList(list);
  }

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Msg</h1>

      <input
        className="btn btn-primary"
        type="button"
        value="Add Message"
        onClick={addMessage}
      />

      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}

            <span className="ms-4">
              {item.messageTime.getHours()} :{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
