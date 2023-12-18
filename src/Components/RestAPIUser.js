import { useEffect, useState } from "react"

export default function RestAPIUser(){

    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(data=>setUser(data));
    },[])
    return(
        <div>
            <table className="table table-bordered">
                {
                    user.map((v)=>{
                        return(<tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.username} </td>
                            <td>{v.email}</td>
                            <td>{v.address.zipcode}</td>
                        </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}