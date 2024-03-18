export function AlertClock(){
    function showTime(){
        const now= new Date()
        alert(`the current time is${now.toLocaleTimeString()}`)
    }
   return(
    <div>
        <p>bottone dell'ora</p>
        <button onClick={showTime}>click</button>
    </div>
   )
}