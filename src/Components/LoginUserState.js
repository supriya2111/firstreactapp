import { useState } from "react";

export default function LoginUserState(){
    const[user,setUser]=useState("");
    const[msg,changeMsg]=useState("");
    return(<div> 
        <form>
            <div>
                    <label  className="form-label"> Enter UserName:</label> 
                     <input type="text" name="uid" id="uid" className="form-control"
                     onChange={(e)=>{setUser(e.target.value)}}/>
            </div>
            <div>
                     <label  className="form-label">Enter Password:</label>
                     <input type="password" name="pwd" id="pwd" className="form-control"/>
            </div>
            <div>
                     <input type="button" value="Submit"  className="btn btn-primary mt-3 me-3"
                     onClick={()=>{changeMsg("welcome "+user)}}/>
            </div>
          
        </form>
          <div> {msg} </div>
    </div>)
}