import { useState } from "react"
export function Counter(){
    const[counter,setCounter]=useState(0)
    function handleClick(){
        setCounter(counter + 1)
    }
}
return(
    
        <div>
            <h1>ciao</h1>
            <button onClick={handleClick}>conta</button>
        </div>
    
)