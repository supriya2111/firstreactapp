import React from "react";

class StateHello extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            msg:"Welcome",
            color:"red"
        }
       this.changeMsg=this.changeMsg.bind(this);
    }

    changeMsg()
    {
        this.setState({msg:"Hello"})
    }
  
    render()
    {
        return(<div>
            <p style={this.state.color}>{this.state.msg}</p>
            <button onClick={this.changeMsg }> Change Msg</button>
        </div>)
    }
}

export default StateHello;