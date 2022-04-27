import React, { useEffect } from 'react'

function Libsys() {

  useEffect(()=>{
    const script = document.createElement("script");
    script.src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
    script.async=true;
    document.body.appendChild(script);
  },[]);
  return (
    <div>
   <df-messenger
  intent="WELCOME"
  chat-title="targetX"
  agent-id="c987549e-d0f3-416a-b5d6-ac9f63ebd6ff"
  language-code="en"></df-messenger>
    </div>
  )
}

export default Libsys