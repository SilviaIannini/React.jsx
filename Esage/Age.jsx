export function Age({name,age}){
    return (
       
           <div>
            <h1>Hello{name}</h1>
            {age >18 && <p>You are {age}</p>}
            {age<65 && <p>You are {age}</p>}
            {age <65 && age > 18 && <p>You are {age}</p>}
            {age === true && <p>You are{age}</p>}
            {age <65 && age >18 && name==='John'&& <p>You are {age}</p>}
           </div>
    )
}