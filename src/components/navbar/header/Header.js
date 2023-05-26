import React from 'react'
import {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";


export default function Header() {

    const content = ["pioneers", "innovators", "leaders"]
    const [message, setMessage] = useState(content[0]);
      const [displayed, updateDisplay] = useState("");
      const [typeDirection, setTypeDirection] = useState("right");
      let animID;
      useEffect(() => {
        //console.log("typeDirection", typeDirection, "message", message)
          if (typeDirection === "right") {
            //console.log("right")
            updateDisplay(message.charAt(0)); // call once to avoid empty element flash
            animID = setInterval(typeLetter, 300); 
            return () => {
                clearInterval(animID);
            }
          }
          else if (typeDirection === "left"){
            //console.log("left")
            animID = setInterval(eraseLetter, 200); 
            return () => {
                clearInterval(animID);
            }
          }
      }, [message]); // this make sure it re-renders every time the content changes (return function resets display) 
  
      const typeLetter = () => {
          updateDisplay(prevText => {
              if (message.length <= prevText.length) {
                clearInterval(animID);
                setTypeDirection("left");
                //console.log("right to left")
                setTimeout(() => {
                handleClick ();
                }, 1000);
              }
              return prevText.concat(message.charAt(prevText.length))
          });
      }
      const eraseLetter = () => {
          updateDisplay(prevText => {
              if (prevText.length <= 1) {
                clearInterval(animID);
                setTypeDirection("right");
                //console.log("left to right")
                handleClick ();
              }
              return prevText.slice(0, prevText.length-1)
          });
      }
      const [selectedContent, selectedContentUpdate] = useState(0);
      function handleClick (){
        //console.log("handleClick")
        // input can't be same as before: by design it doesn't re-type the previous message
        selectedContentUpdate((selectedContent+1)%3);
      }
      useEffect(() => {
        //console.log("selectedContent", selectedContent,"message", content[selectedContent])
        setMessage(content[selectedContent])
      }, [selectedContent,content]);

  return (
    
    <header className="header">
      <div className="header-content">
        <h1 className='pink'>Physis Avenue</h1>
        <p>Physis Avenue is our vision of a sustainable city that can be implemented in the future.  Our name is significant to our aim, as ‘avenue’ is not only a wide street, it is a new way of approaching a problem or making progress towards something. We have shed light on solutions that can bring about significant changes to reduce climate change if executed on a large scale.</p>
        <NavLink className="btn btn-outline-success" to="/about">
          About us
        </NavLink>
      </div>
      <div className="header-footer d-none d-lg-block mt-4">
        <h1 className="animated-text text-left text-light">
          We are <span>{displayed}</span>
        </h1>
      </div>
      
    </header>
  )
}
