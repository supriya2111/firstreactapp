import { useEffect, useReducer, useState } from "react";

export default function InsertData()
{

    const init={
        empid:0,
        ename:"",
        salary:0,
        deptno:0
    }

    const reducer=(state,action)=>{
                switch(action.type){
                    case 'update':
                        return{...state,[action.fld]:action.val};
                    case 'reset':
                        return init;    
                  } 
         }
    
    const[emp,dispatch]=useReducer(reducer,init);
  //  const[msg,setMsg]=useState("welcome");
    const[insertmsg,setInsertMsg]=useState("")

    // useEffect(()=>{
    //     setMsg(localStorage.getItem("msg"))
    // })

    const submitData=(e)=>{
        e.preventDefault();

        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                empid:emp.empid,
                ename:emp.ename,
                salary:emp.salary,
                deptno:emp.deptno
            })
        }
        fetch("http://localhost:9000/insertemp",reqOptions)
        .then(resp=>resp.text())
        .then(data => setInsertMsg(data))
    };
    

    return(<div className="container">
        <form>
            <div>
                <label className="form-label">Enter Employee No: </label>
                <input type="number" name="empno"  className="form-control" value={emp.empid}
                onChange={(e)=>{dispatch({type:'update',fld:"empid",val:e.target.value})}}/>
            </div>
            <div>
                 <label className="form-label">Enter Employee Name: </label>
                <input type="text" name="ename"  className="form-control" value={emp.ename}
                onChange={(e)=>{dispatch({type:'update',fld:"ename",val:e.target.value})}}/>
            </div>
            <div>
                  <label className="form-label">Enter Salary: </label>
                 <input type="number" name="sal"  className="form-control" value={emp.salary}
                onChange={(e)=>{dispatch({type:'update',fld:"salary",val:e.target.value})}}/>
            </div>
            <div>
                 <label className="form-label">Enter Department No: </label>
                <input type="number" name="deptno"  className="form-control" value={emp.deptno}
                onChange={(e)=>{dispatch({type:'update',fld:"deptno",val:e.target.value})}}/>
            </div>
            <div>
                <input type="button" value="Submit" onClick={(e)=>{submitData(e)}} className="btn btn-success mt-3"/>
            </div>
        </form>
        <p>{insertmsg}</p>
    </div>
    )
}    
