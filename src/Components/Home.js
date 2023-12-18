import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    
     const[name,setName]=useState("");
    localStorage.setItem("uname",JSON.stringify(name))

    return(
        <div>
            <p>This is Home Page</p>
            <input type="text" name="user" onChange={(e)=>{setName(e.target.value)}}/>
            
        </div>
    )
}