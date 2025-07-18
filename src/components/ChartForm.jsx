// components/ChartForm.jsx
import React, { useRef } from 'react';

const ChartForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear the input field
    inputRef.current.value = "";

    // Update chat history with user message
    const updatedHistory = [...chatHistory, { role: "user", text: userMessage }];
    setChatHistory(updatedHistory);

    // Add bot placeholder
    setChatHistory(prev => [...prev, { role: "model", text: "Thinking..." }]);

    // Call bot response function after a delay
    setTimeout(() => {
      generateBotResponse(updatedHistory);
    }, 600);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded" type="submit">arrow_upward</button>
    </form>
  );
};

export default ChartForm;
