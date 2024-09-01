import React, { Component } from "react";

let x=768
let y=547
let str="this is my react learning"
let isUser=true


class Ex8 extends Component{
    constructor(props)  {
        super(props)
    }

    render(){
        return(
            <div>
                <h1>data binding in class components</h1>
                <h1>x={x}</h1>
                <h1>y={y}</h1>
                <h1>product={x*y}</h1>
                <hr />
                <h2> string={str}</h2>
                <hr />
                <h2>boolean={isUser?"True":"False"}</h2>
            </div>
        )
    }
}

export default Ex8