import { useEffect, useState } from "react"
export default function UsingEffect(){
    const[sec,setSec]=useState(0);
    const[hr,setHour]=useState(0);
    const[min,setMin]=useState(0)

    useEffect(()=>{setInterval(()=>{setSec(new Date().getSeconds())},1000) }, [])
    useEffect(()=>{setInterval(()=>{setHour(new Date().getHours(),1000)})})
    useEffect(()=>{setInterval(()=>{setMin(new Date().getMinutes())})})

   var name=JSON.parse(localStorage.getItem("uname"))

   

    return(<div>
      
       <p>{hr}:{min}:{sec}</p>
       <p>WELCOME {name}</p>
    </div>)
}