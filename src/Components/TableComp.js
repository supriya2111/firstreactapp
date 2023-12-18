function TableComp(){
    var arr=[1,2,3,4,5,6,7,8,9,10];
    for( let i=0;i<=9;i++)
    {
           arr[i]=arr[i]*6;
    }
    return(
      <table border={1}>
        {
            arr.map((v,i)=>{
                return <tr key={v} >
                    <td >6*{i+1}</td>
                   <td>{v}</td> 
                </tr>
            })
        } 
        </table>
    )
}
export default TableComp