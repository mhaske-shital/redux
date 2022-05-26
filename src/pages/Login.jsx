import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { loginUserAction } from "../actions/auth-action";

export default function Login({history,location}) {
    const [email ,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.user)
    // const { cartItem } = useSelector(state => state.cart)
    const [error, seterror] = useState({
        email: undefined,
        password:undefined
    })
    const loginUser = (e) => {
        e.preventDefault()
        // console.warn(email,password);
        
        
        if (email === "") {
            seterror(pre => {
                return {
                    ...pre,email:"please enter Email"
                }
            })
        }
        if (password === "") {
            seterror(pre => {
                return {
                    ...pre,password:"please enter password"
                }
            })
        }
        if (email !== "" && password !== "") {
            
            dispatch(loginUserAction({ email, password }))
        }
        console.warn(userInfo?.success);
    }
    const handleError = (e) => {
        if (email !== "") {
            seterror(pre => {
                return{...pre,email:""}
            })
        } else {
            seterror(pre => {
                return{...pre,email:"Please Enter Email"}
            })
        }
    }
    const handleError1 = (e) => {
        if (password !== "") {
            seterror(pre => {
                return{...pre,password:""}
            })
        } else {
            seterror(pre => {
                return{...pre,password:"Please Enter password"}
            })
        }
    }

   
    useEffect(() => {
        if(userInfo?.success== true) {
             history.push("/add-blog") }else{
             console.log("login failed");
             }
            
     },[userInfo])
    return <div className="container">
        {/* {
            JSON.stringify(error)
           
        } */}
        
        <div className="row mt-3">
            <div className="col-sm-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body ">
                        <form onSubmit={loginUser}>
                        <label htmlFor="">Please Enter Email</label><br />
                            <input type="email"
                                // value={email}
                                name=""
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Enter Email" id=""
                                onKeyUp={handleError}
                                onChange={(e) => {
                                    setEmail(pre => e.target.value)  
                                }}
                                className={error.email ? "form-control is-invalid":"form-control"}
                            />
                            <span className="invalid-feedback">{error.email}</span>
                            <br />
                        <label htmlFor="">Please Enter Password</label> <br />
                            <input type="password"
                                // value={password}
                                placeholder="Enter password" name="" id=""
                                className={error.password ? "form-control is-invalid" : "form-control"}
                                onKeyUp={handleError1}
                                onChange={(e) => {
                             setPassword(e.target.value)
                                }} />
                             <span className="invalid-feedback">{error.password}</span>
                            <br />
                            <button className="btn btn-success btn-sm w-100 text-center">Login</button>  
                            {/* disabled={email===""||password===""?true:false} */}
                            
                            
                              
                      </form>
                                <span>New user ?</span><Link  to="/register-page">Register</Link>
                         
                    </div>
                </div>
            </div>
    </div>
    </div>
}