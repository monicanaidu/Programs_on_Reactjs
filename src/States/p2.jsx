import React, { useState } from "react";

function P2(props){

    const [num,setnum]=useState(0)

    const numHandler=function(){
        setnum(num+1)
    }

    return(
        <div>
            <h1>state in functinal component</h1>
            <h2>num={num}</h2>
            <button onClick={numHandler}>click me</button>
        </div>
    )
}

export default P2