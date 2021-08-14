import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import {Link , useHistory} from "react-router-dom"
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header( {backButton} ) {

const history= useHistory();

    return (
        <div className="header">

            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <Link to="/profile">
                <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
                </Link>

            )}



        
           <Link to="/">
            <img className="header__logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
            alt="tinder logo" />
            </Link>




            <Link to="/chats">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>

        </div>
    )
}

export default Header
