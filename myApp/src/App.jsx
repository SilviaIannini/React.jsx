import { HelloWorld } from "./HelloWorld"
import { Welcome } from "./Welcome"


export function App(){
    return(
        <div>
            <h1>MY AWESOME APP</h1>
            <hr />
            <HelloWorld/>
            <Welcome name ="JOhn" age={23}/>
            
        </div>
    )
}