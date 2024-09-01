import React from "react";

//array
let color=["red","blue","green","yellow"]

function Ex9(props){
 return(
    <div>
        <h1>Array in functional component</h1>
   
    <div>
    {
        color.map(function(item,index){
            return(
                <h3 key={index}>
                    {item}
                </h3>
            )

        })
    }
    </div>
    </div>
 )
}

export default Ex9