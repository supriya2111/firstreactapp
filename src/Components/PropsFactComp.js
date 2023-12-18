export default function PropsFactComp(props)
{
    
        var fact=1;
        for(let i=1;i<=props.val;i++)
        {
           fact=fact*i;
        }
    return(<div>

            <p>Factorial of no: {fact}</p>
    </div>
     )
}