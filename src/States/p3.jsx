import React, { useState } from "react";


const P3=function(props){
    const [view,setview]=useState(true)

     const viewHandler=()=>
    {
        setview(!view)
    }

    return(
        <div>
            <h1>State</h1>
            <section>
                {
                    view?(
                        <div>
                            <h1>Login</h1>
                            <form action="">
                                <div>
                                    <label htmlFor="user">Username</label>
                                    <input type="text" name="user" id="user" required />
                                </div>

                                <div>
                                    <label htmlFor="pass">Password</label>
                                    <input type="text" name="pass"  id="pass" required/>
                                </div>

                                <div>
                                    <button type="submit">login</button>
                                </div>
                            </form>
                            <p>
                                New user?<button onClick={viewHandler}>Register</button>
                            </p>
                        </div>
                    ):(

                        <div>
                        <h1>Register</h1>
                        <form action="">
                            <div>
                                <label htmlFor="user">Username</label>
                                <input type="text" name="user" id="user" required />
                            </div>

                            <div>
                                <label htmlFor="pass">Password</label>
                                <input type="text" name="pass"  id="pass" required/>
                            </div>

                            <div>
                                <label htmlFor="compass"> Comfirm Password</label>
                              <input type="text"  name="compass" id="compass" required/>
                            </div>

                            <div>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                        <p>
                            Already Registered user<button onClick={viewHandler}>Login</button>
                        </p>
                    </div>

                    )
                }
            </section>
        </div>
    )
}


export default P3