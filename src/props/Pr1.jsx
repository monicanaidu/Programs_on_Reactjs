import React ,{Component} from "react";
import Ch1 from "./sub/Ch1";

export default class Pr1 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Props in class component</h1>
                <h4>x={this.props.x}</h4>
                <h4>y={this.props.y}</h4>
                <h4>product={this.props.x}*{this.props.y}</h4>
                <Ch1 a={this.props.x} />


            </div>
        )
    }
}