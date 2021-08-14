import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider"

function Login() {

    const [ {}, dispatch] = useStateValue();

    const signin=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
             <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU"
              alt=""
               />
               <div className="login__text">
                   <h1>Sign in to Tinder</h1>
               </div>
               <Button type="submit" onClick={signin}>
                   Sign In With Google
               </Button>
            </div>
        </div>
    )
}

export default Login
