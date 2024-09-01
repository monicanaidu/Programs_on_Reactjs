import React from "react";
import Ch2 from "./sub/Ch2";

function Pr2(props){
    return(
        <div>

        <h1>props in functional component</h1>
        <h5>x={props.x} ,y={props.y} </h5>

        <Ch2 a={props.x}/>
        </div>
    )
}

export default Pr2