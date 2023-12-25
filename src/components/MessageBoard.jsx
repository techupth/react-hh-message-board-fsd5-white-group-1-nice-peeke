import React, { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello all! This is the first message." },
  ]);
  const [newMessageText, setNewMessageText] = useState("");

  const addMessage = () => {
    if (newMessageText.trim() !== "") {
      const newMessage = { id: Date.now(), text: newMessageText };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessageText("");
    }
  };

  const deleteMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>

      <div className="message-input-container">
        <input
          id="message-text"
          name="message-text"
          type="text"
          placeholder="Enter message here"
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>

      <div className="board">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <h1>{message.text}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(message.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
