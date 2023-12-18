import {useState} from "react";

export default function StateColor(){
    
    const[cl,setCl]=useState("red");

    return(<div>
        <p style={{color:cl}} onClick={()=>{setCl("blue")}}>This is Paragraph </p>
    </div>)
}
