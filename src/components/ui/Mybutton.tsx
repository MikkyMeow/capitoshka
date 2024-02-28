import React, { FC, useState } from "react";
import classes from './Mybutton.module.css'
import { IIProp } from '../pages/Auth/ui/Auth'




export const Mybutton: FC<IIProp> = ({Enter}) => {
  
       
    return (

        <button className={classes.Btn} onClick={()=> Enter()}>log in</button>

    )
}