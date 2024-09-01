import React, { useState } from "react";

function P8(props){

    const [num,setnum]=useState(1)

    const AdHandler=function(){
        setnum(num+1)
    }

    const sbHandler=function(){
        if(num <=1){
            setnum(1)
        }else{
        setnum(num-1)
        }
    }

    return(
        <div>
            <h1>CART</h1>
            <h2>Num={num}</h2>

            <button onClick={AdHandler}>ADD</button>
            <button onClick={sbHandler}>Sub</button>


        </div>
    )
}


export default P8