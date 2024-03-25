import { useState } from "react"
export function Login(){
    const[data, setData]=useState({
        "username":"",
       " password":"",
        "box":false,
    })

   function HandleForm(event){
    const name=event.target.name 
    const value=event.target.value 
    const checked=event.target.checked
    const type=event.target.type 

    setData((data)=>{
        return{
            ...data,
            [name]: type === "checkbox" ? checked : value,
        }
    }
    )
   }


    return(
        <form>
            <input name="username" value={data.username} onChange={HandleForm}/>
            <input name="password"type="password" value={data.password} onChange={HandleForm}/>
            <input name="box" type="checkbox" checked={data.box} onChange={HandleForm}/>
        </form>
    )

}