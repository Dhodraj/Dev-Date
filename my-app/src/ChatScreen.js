import { Avatar } from '@material-ui/core';
import React from 'react'
import {useState} from "react";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput]=useState('')

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }

    const [messages , setMessages]=useState([
        {
            name:"Anita Jain",
            image:"https://media.gettyimages.com/photos/anita-jain-author-of-book-called-marrying-anita-picture-id617948428?k=6&m=617948428&s=612x612&w=0&h=NUwa6ZVI-yLdiktuw5xU9aoEIBCU-YQK2un7SiN5zYo=" ,
           
            message:"Would you do this in React?",
        },
        {
            name:"Anita Jain",
            
            image:"https://media.gettyimages.com/photos/anita-jain-author-of-book-called-marrying-anita-picture-id617948428?k=6&m=617948428&s=612x612&w=0&h=NUwa6ZVI-yLdiktuw5xU9aoEIBCU-YQK2un7SiN5zYo=" ,
            
            message:"Oh God 👏",
        },
        {
            message:"Thank You ✨"
        }
    ]);
    return (
        <div className="chatscreen">
            <p className="timestamp">YOU MATCHED WITH GENELIA ON 13/08/2020</p>
            {messages.map( (message) =>(

                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )  
            ))}

            <div >
                <form className="input">
                    <input value={input} onChange={e=> setInput(e.target.value)} className="inputField" type="text" placeholder="Type a Message"/>
                    <button onClick={handleSend} type="submit" className="inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
