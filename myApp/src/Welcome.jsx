export function Welcome({name,age}){
return (
    <div>
        <p>Welcome, <strong>{name}</strong></p>
        {age >18 && age <65 && name=== "John" && <p> You are {age} years old</p>}

    </div>
)
}