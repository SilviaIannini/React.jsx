import { useState } from "react"


export function TodoList() {
    const [todos, setTodos] = useState(['string1','string2'])
    const [inpValue, setInpValue] = useState('')

    function handleInp(event) {
       const inpVal = event.target.value 
       setInpValue(inpVal)
    }
    
    function handleReset() {
       setTodos([])
    }

    function handleAdd() {
        if (inpValue !== '') {
            setTodos([...todos, inpValue])
            setInpValue('')
        }
    }

    return (
        <>
        <ul>{todos.map((item, index) => {
            return  <li key={index}>{item}<button onClick={() => setTodos(todo => todo.filter((_, i) => i !== index))}>Remove</button></li> 
            })}</ul>
        <input value={inpValue} onChange={handleInp} />
        <button className={classes.todoClass} onClick={handleAdd}>Add</button>
        <button onClick={handleReset}>Reset</button> 
        </>
    )
}
