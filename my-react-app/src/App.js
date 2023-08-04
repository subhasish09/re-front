import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: inputValue }),
      });

      const data = await response.json();
      setMessage(data.reply);
    } catch (error) {
      console.error('Error fetching welcome message:', error);
    }
  };

  return (
    <div className="App">
      <h1>React App with Flask Backend</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter "hello":
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
