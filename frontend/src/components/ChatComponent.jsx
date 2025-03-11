const ChatComponent = ({ messages, onSendMessage }) => {
    const [input, setInput] = useState('');
  
    const handleSend = () => {
      onSendMessage(input);
      setInput('');
    };
  
    return (
      <div className="chat-window">
        <h2>AI Assistant Chat</h2>
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index} className={msg.sender === 'AI' ? 'ai-msg' : 'user-msg'}>
              {msg.text}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    );
  };
  