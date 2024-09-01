import React from "react";

const Ch6 =function(props){
    return(
        <div>

        <h2>employee={props.emp.map(function(item,index){
            return(
                <p key={index}>
                  {item.id}  {item.name} <br />
                    {item.city} <br />
                    {item.bank.title} <br />
                    {item.bank.salary}
                </p>
            )
        })}</h2>
        
        </div>
    )
}

export default Ch6