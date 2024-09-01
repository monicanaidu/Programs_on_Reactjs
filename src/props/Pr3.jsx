import React ,{useState} from "react";
import Ch3 from "./sub/Ch3";

function Pr3(props){
    const [num,setnum]=useState(0)

    const Adnum=(val)=>{
        setnum(num+val)
    }

    return(
        <div>
            <h1>Fisrt child</h1>
            <Ch3 x={num} numHandler={Adnum}/>
            
        </div>
    )
}

export default Pr3