import React, { Component } from "react";

class P7 extends Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }

    sbhandler(){
       if(this.state.num<=1){
        this.setState({
            num:1
        })
        }else{
            this.setState({
                num:this.state.num-1
            })
        }
       
    }

    Adhandler(){
        this.setState({
            num:this.state.num+1
        })
    }



    render(){
        return(
            <div>
                <h1>cart calculation</h1>
                <h2>Num={this.state.num}</h2>
                <button onClick={()=>{this.Adhandler()}}>Add</button>
                <button onClick={()=>{this.sbhandler()}}>Sub</button>

            </div>

        )
    }
}

export default P7