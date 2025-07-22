import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import ChatbotIcon from '../components/ChatbotIcon';
import ChartForm from '../components/ChartForm';
import ChatMessage from '../components/ChatMessage';
import { companyinfo } from '../companyInfo';
import { MessageCircle, Minimize2, Maximize2 } from 'lucide-react';

const Chat = () => {
  const { user } = useAuth();
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyinfo
    }
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const API_URL = import.meta.env.VITE_API_URL;

    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };

    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }]
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory })
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response from the API");
      }

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      updateHistory(reply.replace(/\*\*(.*?)\*\*/g, "$1").trim());
    } catch (error) {
      console.error("Error:", error);
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ 
        top: chatBodyRef.current.scrollHeight, 
        behavior: "smooth" 
      });
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto p-4">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600">
                How can I assist you today?
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChatbotIcon />
              <div>
                <h2 className="font-semibold">AI Assistant</h2>
                <p className="text-primary-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-primary-600 rounded-md transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-5 h-5" />
              ) : (
                <Minimize2 className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Chat Body */}
          {!isMinimized && (
            <>
              <div 
                ref={chatBodyRef} 
                className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50"
              >
                {/* Welcome Message */}
                <div className="flex items-start space-x-3">
                  <ChatbotIcon />
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
                    <p className="text-gray-800">
                      Hey there 👋 <br />
                      How can I assist you today?
                    </p>
                  </div>
                </div>

                {/* Chat Messages */}
                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t bg-white p-4">
                <ChartForm
                  chatHistory={chatHistory}
                  setChatHistory={setChatHistory}
                  generateBotResponse={generateBotResponse}
                />
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Ask a Question",
              description: "Get answers to any question you have",
              icon: "❓"
            },
            {
              title: "Creative Writing",
              description: "Get help with writing and creativity",
              icon: "✍️"
            },
            {
              title: "Problem Solving",
              description: "Work through complex problems together",
              icon: "🧠"
            }
          ].map((action, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">{action.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;