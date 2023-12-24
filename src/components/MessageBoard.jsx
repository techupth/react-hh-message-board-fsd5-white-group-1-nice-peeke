import { useState } from "react";

function MessageBoard() {
  const [messageBoard, setMessageBoard] = useState([]);
  const [message, setMessage] = useState("");

  function addMessage(event) {
    event.preventDefault();
    const newMessageBoard = [...messageBoard];
    newMessageBoard.push(message);
    setMessageBoard(newMessageBoard);
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(text) => {
              setMessage(text.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        <ul>
          {messageBoard.map((item) => {
            return (
              <li>
                <div className="message">
                  <h1>{item}</h1>
                  <button className="delete-button">x</button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="message">
          <h1>Hello all ! This is first message.</h1>
          <button className="delete-button">x</button>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
