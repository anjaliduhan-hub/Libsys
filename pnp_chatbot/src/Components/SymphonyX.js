import React from 'react'
import {useEffect} from 'react'

function Myntra() {


      useEffect(()=>{
        const script = document.createElement("script")
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        script.async = true
        document.body.appendChild(script)
      },[]);

  return (
  <df-messenger
  intent="WELCOME"
  chat-title="symphonyX"
  agent-id="dde9acd3-4875-40b4-ab60-325153cad2fc"
  language-code="en"></df-messenger>
  );
}

export default Myntra