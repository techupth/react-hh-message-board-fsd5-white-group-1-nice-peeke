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

  function deleteMessage(messageIndex) {
    const newMessageBoard = [...messageBoard];
    newMessageBoard.splice(messageIndex, 1);
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
        {messageBoard.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
