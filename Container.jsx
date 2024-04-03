import { useState } from "react";
export function Container({title,children}){
    const[collapsed,setCollapsed]=useState(false)
    function HandleCollapse(){
        setCollapsed((t)=>!t)
    }
    return(
        
        <div className="app">
            <div claasName="app-title">{title} <button onClick={HandleCollapse}>mostra</button></div>
            {!collapsed &&<div className='app-content'>{children}</div>}

        </div>
    )
}