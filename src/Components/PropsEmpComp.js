export default function PropsEmpsComp(promps)
{
    return(
        <table border={1}>
          <tr>
             <td> Employee Id:</td>
             <td> {promps.arr[0]}</td>
         </tr>
         <tr>
            <td>Employee Name</td>
            <td> {promps.arr[1]}</td>
         </tr>
         <tr>
            <td>Salary</td>
            <td>{promps.arr[2]}</td>
         </tr>
        </table>
    )
}