import { useState } from "react"

export default function StudentState(){
     var arr=["black","blue","green","red"]
       const[ele,setEle]=useState("");
       const[names,setNames]=useState(arr);
    return(<div>
       
          <ul>
            {
               names.map((v)=>{
                    return <li key={v}> {v}</li>
                })
            }
          </ul>
          <input type="text" name="ele" value={ele}
          onChange={(e)=>{setEle(e.target.value)}}/>
          <button onClick={()=>{
            setNames(names.concat([ele]))}}> Add </button>
          
    </div>)
}