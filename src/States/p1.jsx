import React, { useState } from "react";

//state is a internal variables pf component (private)
//state is property of component 
//to create a state variable in functional component-hooks{ use prefix}
function P1(props){
    //const[state,handler_method]=userState(initial_value)
    const [x,setX]=useState(10)
    const [user,setuser]=useState("john henry")
    const [isAdmin,setisAdmin]=useState(true)
    const [color,setcolor]=useState(["red","blue","green" ,"yellow"])
    const [course,setcourse]=useState({
        title:"MERN",
        duration:"3months"
    })

    //normal js variable
    let y;
    return(
        <div>
            <h1>states in functinal component</h1>  
            <h2>num={x}</h2> 
            <h2>name={user}</h2> 
            <h2>{isAdmin?"true":"false"}</h2>
            <hr />
            <div>
                {
                    color.map(function(item,index){
                        return(
                            <p key={index}>
                                {item}
                            </p>
                        )
                    })
                }
                <h2>course={course.title}</h2>
                <h2>course={course.duration}</h2>
            </div>
        </div>
    )
}

export default P1