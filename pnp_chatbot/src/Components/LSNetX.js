import React, { useEffect } from 'react'

function School() {

    useEffect(()=>{
        const script = document.createElement("script")
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        script.async = true
        document.body.appendChild(script)
    },[]);

    return (
    <div>
  <df-messenger
  intent="WELCOME"
  chat-title="lsnetX"
  agent-id="52068e99-4d29-403d-9caa-5596363d0a93"
  language-code="en"
></df-messenger></div>
  )
}

export default School