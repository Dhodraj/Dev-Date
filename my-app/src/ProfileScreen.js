import {  Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import {Link} from "react-router-dom"
import PersonIcon from "@material-ui/icons/Person"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useStateValue} from "./StateProvider"
import "./ProfileScreen.css"

function ProfileScreen() {
    const [{user}, dispatch]=useStateValue();

    return (
        <div >
            <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>

            <Link to="/">
            <img className="header__logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
            alt="tinder logo" />
            </Link>

            <Link to="/">
            <IconButton>
                <ArrowForwardIosIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
            </div>


            <div className="container">
            <img className="container__img" src={user?.photoURL} alt=""/>
            <p>{user?.displayName}</p>
            </div>

        </div>
    )
}

export default ProfileScreen
