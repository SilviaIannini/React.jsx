import { useState } from "react";
import { DisplayCounter } from "./DisplayCounter";
export function Counter(){
 
    const [counter, setCounter]=useState(0)
    
    function HandleAu(){
        setCounter(counter +1)
    }
    function HandleDec(){
        setCounter(counter -1)
    }
    function HandleReset(){
        setCounter(0)
    }
    return(
       <div>
        <DisplayCounter count={counter}/>
         <button onClick={HandleAu}>Aumenta</button>
            <button onClick={HandleDec}>diminuisci</button>
            <button onClick={HandleReset}>reset</button>
       </div>
          
           
       
    )
}