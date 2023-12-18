import {useDispatch, useSelector} from 'react-redux'
import { Decrement, Increment } from '../slice';

export default function Counter(){
    const mystate=useSelector((state)=>state.counter.count)
    let dispatch=useDispatch();

    return(
        <div>
        <form>
            <input type="button" value="Increament" onClick={()=>{  dispatch(Increment()) }}/>
            <input type="button" value="Decreament" onClick={()=>{ dispatch(Decrement()) }}/>
        </form>

        <div>{mystate}</div>
    </div>
    )
}