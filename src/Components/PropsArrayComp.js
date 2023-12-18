export default function PropsArrayComp(props)
{
    
     return(
        <ul>
            {
               props.arr.map((v)=>{
                 return <li key={v}>
                         {v} 
                    </li>
                 })
            }
        </ul>
      
     )
}