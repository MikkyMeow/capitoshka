import { Input, TextField } from "@mui/material"
import { Mybutton } from "components/widgets/Button/Mybutton"
import React, { FC, useState } from "react";
import classes from './Auth.module.css'




export const Auth = ()=> {
    const [login, setLogin]  = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('Authorization')
    const [result, setResult] = useState('')
    const Enter = function enter(IProp: {password: string, login: string, setResult(): any}) {
        console.log(result);
        setResult(login + password);   
        console.log(result);    
    }

    return (
        <div className={classes.back}> 
            <div className={classes.field}>
            <div className={classes.top}>
            <h1>{type}</h1>
            </div>
            <div className={classes.input}>
            <TextField value={login} variant="filled" label="Login/Nickname" color="info"  onChange={e=> {setLogin(e.target.value)}}/>
            <TextField value={password} variant="filled" type="password" color="info" autoComplete="current-password" label="Password" onChange={e=> {setPassword(e.target.value)}} />
            </div>
            <div className={classes.btn}>
                <Mybutton enter={Enter}/>
            </div>
            </div>
        </div>
    )
}