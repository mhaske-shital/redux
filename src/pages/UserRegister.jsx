import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { userRegisterAction } from "../actions/register-action";
 
export default function UserRegister({history}) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const userRegisterDone = (e) => {
        e.preventDefault()
        dispatch(userRegisterAction({ name, email, password }))
        // alert("Resgister Successfully")
        e.target.reset()
        console.warn(name,email,password);
        history.push("/login")
        
     }
    return <div className="container mt-3">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="card">
                    <div className="card-body">
                    <form action="" onSubmit={userRegisterDone}>
                        <label htmlFor="">Name</label> <br />
                        <input type="text" name="" className="form-control" id="" placeholder="Please Enter Name" required onChange={(e)=>{
                            setName(e.target.value)
                        }} /><br />
                        <label htmlFor="">Email</label><br />
                        <input type="email" name="" className="form-control" id="" placeholder="Please Enter Name" required  onChange={(e)=>{
                           setEmail(e.target.value)
                        }}/><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password" name="" className="form-control" id="" placeholder="Please Enter Name" required onChange={(e)=>{
                         setPassword(e.target.value)
                        }} />
                        <br />
                        <button className="btn btn-info">New Register</button>
                    </form>
                   </div>
                </div>
            </div>
     </div>
    </div>
}