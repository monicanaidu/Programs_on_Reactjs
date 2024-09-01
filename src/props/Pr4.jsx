import React, { useState } from "react";
import Ch4 from "./sub/Ch4";


let user={
    name:"moni",
    email:"moni@gmail.com",
    age:22

}
function Pr4(props){

    const [car,setcar]=useState({
        title:"thar",
        company:"maruti",
        year:2024
    })

    return(
        <div>

        <h1>Objects as props</h1>
        <Ch4 x={car} y={user}/>
        </div>
    )
}

export default Pr4