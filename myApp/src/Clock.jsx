import { useState,useEffect } from "react";
export function Clock(){
    const[date,setDate]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[] 
    )
    return(
        <div>
            <h1>Current time:{date.toLocaleTimeString()}</h1>
        </div>
    )
}