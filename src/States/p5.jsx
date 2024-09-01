import React, { Component } from "react";


class P5 extends Component{
    constructor(props){
        super(props)
        this.state={
            x:10,
            y:20,
            title:"welcome to string",
            color:["red","blue","green","yellow"],
            isUser:true,
            user:{
                name:"john",
                email:"john@gmail.com",
                age:22
            }
        }
    }

    render(){
        return(
            <div>
                <h1>State in class component</h1>
                <h3>{this.state.x}</h3>
                <h3>{this.state.y}</h3>
                <h3>{this.state.title}</h3>
                <h3>{this.state.color.map(function(item,index){
                    return(
                        <p key={index}>
                            {item}
                        </p>
                    )
                })}</h3>

                <h6>{this.state.isUser?"say true":"say false"}</h6>

            {/*     <p>{this.state.user.map(function(item,index){
                    return(
                        <p key={index}>
                            {item}
                        </p>
                    )
                })}</p> */}

                
            </div>
        )
    }
}


export default P5