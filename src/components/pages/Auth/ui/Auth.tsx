import { Input, TextField } from "@mui/material"
import { Mybutton } from "components/ui/Mybutton"
import React, { FC, useState } from "react";
import classes from './Auth.module.css'

export interface IIProp {
    login?: string;
    password?: string;
    Enter(): any;    
}


export const Auth = ()=> {
    const [login, setLogin]  = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('Authorization')
    const [result, setResult] = useState('')
    function Enter(IIProp: {password: string, login: string, setResult(): any}) {
        setResult(login + password)   
        console.log(result);    
    }

    return (
        <div className={classes.back}> 
            <div className={classes.field}>
            <div className={classes.top}>
            <h1>{type}</h1>
            </div>
            <div className={classes.input}>
            <TextField variant="filled" label="Login/Nickname" color="info"  onChange={e=> {setLogin(e.target.value)}}/>
            <TextField variant="filled" type="password" color="info" autoComplete="current-password" label="Password" onChange={e=> {setPassword(e.target.value)}} />
            </div>
            <div className={classes.btn}>
                <Mybutton Enter={Enter}/>
            </div>
            </div>
        </div>
    )
}

