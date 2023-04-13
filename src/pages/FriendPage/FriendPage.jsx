import React, { useState } from 'react';


export default function FriendsPage({ friend }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log(`Sending message to ${friend.name}: ${message}`);
  };

  return (
    <div>
      <h3>Send a message to {friend.name}</h3>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}