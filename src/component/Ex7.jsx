import React from "react";


let x=768
let y=547

let str="this is my react learning"

let isUser=true
const Ex7= function(props){

   
    return( 
        <div>
            <h1>React const local functional component</h1>
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

export default Ex7