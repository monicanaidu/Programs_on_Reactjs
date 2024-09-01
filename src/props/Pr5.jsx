import React, { useState } from "react";
import Ch5 from "./sub/Ch5";


let color=["red","blue","green","yellow"]
function Pr5(props){

    const [makeup,setmakeup]=useState(["foundation","lipstick","chain","earrings"])
    return(
        <div>

        <h1>Array as props</h1>
        <Ch5 color={color} makeup={makeup}/>
        </div>
       
    )
}

export default Pr5