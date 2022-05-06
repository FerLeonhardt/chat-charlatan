import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      userName='ferchu'
      userSecret='123456789'
      projectID='3e13bb5f-4fb4-43f1-a28b-c8e851b73978'
      renderChatFeed={chatAppProps => {
        <ChatFeed {...chatAppProps} />;
      }}
    />
  );
};

export default App;
