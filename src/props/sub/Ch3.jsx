import React from "react";

function Ch3(props){

  
    return(
        <div>
            <h1>Num={props.x}</h1>
            <button onClick={()=>props.numHandler(10)}>Add+10</button>
            <button onClick={()=>props.numHandler(20)}>Add+20</button>
            <button onClick={()=>props.numHandler(40)}>Add+40</button>
          
        </div>
    )
}

export default Ch3