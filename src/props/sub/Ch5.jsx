import React from "react";


const Ch5=function(props){
    return(
        <div>
            <h2>color={props.color.map(function(item,index){
               return(
                <p key={index}>
                {item}
            </p>
               )
            })}</h2>


            <br /><br />

            <h6>makeup={props.makeup.map(function(item,index){
                return(
                    <p key={index}>
                        {item}
                    </p>
                )
            })}</h6>
        </div>
    )
}

export default Ch5