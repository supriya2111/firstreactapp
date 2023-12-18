function ArrayUList(){
    var names=["Supriya","Sanket","Nikita","Priti","Priyanka"]
    return(
        <ul>
            {
                names.map((v)=>{
                    return <li key={v}>
                             {v}
                           </li>
                })
            }
        </ul>
    )
}
export default ArrayUList;