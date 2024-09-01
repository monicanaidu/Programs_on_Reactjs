import React, { Component } from "react";

export default class Ch1 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>grand child</h1>
                <h5>a={this.props.a}</h5>
                <h5>b={this.props.b}</h5>
            </div>
        )
    }
}