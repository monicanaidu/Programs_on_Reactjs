import React from "react";

const Ex6=(props)=>{

    let x=76
    let y=54

    let str="welcome to reactjs"

    let isAdmin=false
    return( 
        <div>
            <h1>data binding in arrow function component</h1>
            <h1>x={x}</h1>
            <h1>y={y}</h1>
            <h1>product={x*y}</h1>
            <hr />
            <h2> string={str}</h2>
            <hr />
            <h2>boolean={isAdmin?"True":"False"}</h2>

        </div>
    )
}

export default Ex6