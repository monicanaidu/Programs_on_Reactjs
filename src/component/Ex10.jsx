import React from "react";


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

let tech=[
    {
    id:1,
   title:"MERN",
   lang:["mongodb","nodejs","expressjs","reactjs"],
   isfullstack:true,
   getInfo:function(){
    return this.title;
   }
},
]




function Ex10(props){
    return(

        <div>
         <h1>object in functional component</h1>
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

            <hr />
         <div>
            {
                tech.map((item,index)=>{
                    return(
                        <section key={index}>
                            <h1>{item.id}{item.title}</h1>
                            <h1>{item.lang.map((item,index)=>{
                                return(
                                    <h3 key={index}>
                                     {item}
                                    </h3>
                                )
                            })} </h1>
                            <h5>{item.isfullstack? "true":"false"}</h5>
                            <h5>{item.getInfo()}</h5>
                        </section>

                    )
                })
            }
         </div>
        </div>
    )
}

export default Ex10