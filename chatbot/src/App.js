import React from 'react'
import Chatbot from "react-chatbot-kit"

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  return (
    <div>
      <header className="App header">
      <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser}/>
      </header>
    </div>
  )
}

export default App