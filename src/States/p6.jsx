import React, { Component } from "react";

class P6 extends Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }

    numHander(val){
        this.setState({num:this.state.num+val})
    }

    render(){
        return(
            <div>
                <h1>State and state handler class component</h1>
                <h2>num={this.state.num}</h2>

                <br /><br />

                <button onClick={()=>this.numHander(10)}>Add+10</button>
                <button onClick={()=>this.numHander(20)}>Add+20</button>
                <button onClick={()=>this.numHander(30)}>Add+30</button>
            </div>
        )
    }
}


export default P6
