import React from "react";

const Ch4=function(props){
    return(
        <div>
            <h3>Props in child</h3>

            <h6>car={props.x.title}</h6>
            <h6>car={props.x.company}</h6>
            <h6>car={props.x.year}</h6>

            <h5>user={props.y.name}</h5>
            <h5>user={props.y.email}</h5>
            <h5>user={props.y.age}</h5>
        </div>
    )
}


export default Ch4 