import React from "react";

let x=76
const y=54

let str="welcome to reactjs"

let isAdmin=false

//{}=>expression tag
function Ex5(props){
    return(
        <div>
            <h1>Data binding in components</h1>
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

export default Ex5