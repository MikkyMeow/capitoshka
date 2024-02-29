import React, { FC, useState } from "react";
import classes from './Mybutton.module.css'

interface IProp {
    enter: any;    
}


export const Mybutton: FC<IProp> = ({enter}) => {
  
       
    return (

        <button className={classes.Btn} onClick={()=> enter()}>log in</button>

    )
}