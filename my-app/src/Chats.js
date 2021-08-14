import React from 'react'
import './Chats.css';
import Chat from "./Chat"

function Chats() {
    return (
        
        <div className="chats">
           
             
           <Chat 
            name="Anita Jain"
            message="Thank You ✨"
            timestamp="1 min ago"
            profilePic="https://media.gettyimages.com/photos/anita-jain-author-of-book-called-marrying-anita-picture-id617948428?k=6&m=617948428&s=612x612&w=0&h=NUwa6ZVI-yLdiktuw5xU9aoEIBCU-YQK2un7SiN5zYo=" />
        </div>
        
    )
}

export default Chats
