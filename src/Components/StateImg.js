import { useState } from "react";
import pic from '../dest4.jpg'

export default function ImageToggle(){
    const[flag,changeFlag] = useState(true);
    let w=500;
    let h=400;
    return(
        <div>
            <img src={pic} height={h} width={w}
            alt="img" style={{display:flag?"block":"none"}}></img>
            <input type="checkbox" checked={flag} onClick={()=>{changeFlag(!flag)}}/>Toggle Image
        </div>
    )
}