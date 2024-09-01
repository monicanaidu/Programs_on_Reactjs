import React, { Component } from "react";

//array
let color=["red","blue","green","yellow"]


//object array
let user=[
    {
        id:1,
        name:"tom",
        email:"tom@gmail.com",
        age:22
    },
    {
        id:2,
        name:"moni",
        email:"moni@gmail.com",
        age:23
    },
    {
        id:3,
        name:"arvi",
        email:"arvi@gmail.com",
        age:29
    }
]

class Ex11 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                
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

                    <hr />
                    <div>
                        {
                              user.map((item,index)=>{
                                return(
                                    <section key={index}>
                                        <h1>{item.id} {item.name}</h1>
                                        <h5>email={item.email}</h5>
                                        <h5>age={item.age}</h5>
                                       
                                    </section>
                                )
                            })
                        }
                    </div>

        
                
            </div>       
            )

    }
}

export default Ex11