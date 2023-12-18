import { useEffect, useState } from "react"

export default function RestAPIEmp(){
const[emps,setData]=useState([]);

useEffect(()=>{
    fetch("http://localhost:9000/empform")
    .then(resp=>resp.json())
    .then(data=>setData(data));
},[])

    return(
        <div>
            <table className="table table-bordered">
                {
                    emps.map((v)=>{
                        return (
                
                        <tr>
                            <td>{v.EMPNO}</td>
                            <td>{v.ENAME}</td>
                            <td>{v.JOB}</td>
                        </tr>)
                    })
                }
            </table>
        </div>
    )
}