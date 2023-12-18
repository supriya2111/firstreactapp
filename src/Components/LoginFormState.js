import { useReducer } from "react";

const init={
   email:"",
   pwd:"",
   gender:"",
   city:"",
   flag:false


}
const reducer=(state,action)=>{
  switch(action.type){
    case 'update':
        return{...state,[action.fld]:action.val};
    case 'reset':
        return init;    
  } 
}
export default function LoginFormState()
{

   const[user,dispatch]=useReducer(reducer,init);

   const submitData= (e)=>{
        e.preventDefault();
        console.log(JSON.stringify(user));
        
   }

    return(<div className="container"> 
        <h1>Registration Form</h1>
        <form>
            <div>
                    <label className="form-label"> Enter UserName:</label> 
                     <input type="email" name="email" id="email" className="form-control " value={user.email} 
                     onChange={(e)=>{dispatch({type:'update',fld:"email",val:e.target.value})}}/>
            </div>
            <div>
                     <label className="form-label">Enter Password:</label>
                     <input type="password" name="pwd" id="pwd" className="form-control" value={user.pwd} 
                     onChange={(e)=>{dispatch({type:'update',fld:"pwd",val:e.target.value})}}/>
            </div>
            <div>
                <input type="radio" name="gender" value="Male" className="form-check-input" checked={user.gender=="Male"} 
                onChange= {(e)=>{dispatch({type:'update',fld:"gender",val:e.target.value})}}/> Male 
                <input type="radio" name="gender" value="Female" className="form-check-input" checked={user.gender=="Female"} 
                onChange={(e)=>{dispatch({type:'update',fld:"gender",val:e.target.value})}}/> Female
            </div>
            <div>
                <select className="form-select mt-3" value={user.city} onChange={(e)=>{dispatch({type:'update',fld:"city",val:e.target.value})}}>
                    <option >select city</option>
                    <option value="Pune"  >Pune</option>
                    <option value="Mumabi"  >Mumbai</option>
                    <option value="Nashik"  >Nashik</option>
                </select>
            </div>
             <div className="form-check ">
                <input type="checkbox" name="flag" checked={user.flag} className="form-checked-input mt-3 " value={user.flag}
                onChange={(e)=>{dispatch({type:'update',fld:"flag",val:e.target.checked})}}/>
                <label className="form-check-label ms-1">I agree</label>
             </div>
            <div>
               <input type="submit" value="Submit" className="btn btn-success mt-3 me-3 "
               onClick={(e)=>{submitData(e)}}/>
                     
          </div>
          
        </form>
        <div>

        </div>
       
    </div>)
}