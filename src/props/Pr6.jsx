import React from "react";
import Ch6 from "./sub/Ch6";


const emp=[
    {
        id:1,
        name:"moni",
        city:"bangalore",
        bank:{
            title:"sbi",
            type:"salary"
        }
    },
    {
        id:2,
        name:"tom",
        city:"usa",
        bank:{
            title:"dhanlaxmi",
            type:"emi"
        }
    },
    {
        id:3,
        name:"harry",
        city:"madras",
        bank:{
            title:"axis",
            type:"Sb"
        }
    },

]

function Pr6(props){
    return(
        <div>

        <Ch6 emp={emp}/>
        </div>
    )
}

export default Pr6
