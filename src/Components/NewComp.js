import pic from '../dest4.jpg'
import TimerComp from '../Components/TimerComp'
function NewComp(){
    let w=300;
    let h=800;
    return(
        <div>
            <h1>Welcome</h1>
             <img src={pic} width={w} heigth={h}></img>
             <TimerComp/>
        </div>
    )
}

export default NewComp;