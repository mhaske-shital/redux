import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userLogoutAction } from '../actions/auth-action'
// /import { userLogoutAction } from '../action/auth-action';

export default function LogOut({history}) {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.user)
    const [count ,setCount]=useState(5)
    useEffect(() => {
        if (userInfo) {
            dispatch(userLogoutAction()) 
            setTimeout(() => {
                clearInterval(rem)
                history.push("/login")
            }, 5000)
           const rem= setInterval(() => {
               setCount(pre=> pre-1)
           }, 1000)  
        } else {
           history.push("/login")
        }
    },[])
  return (
      <>
          <h1>You have Logout Successully</h1>
          <h1>You will be Redirted after  {count} Sec on login page </h1>
    </>
  )
}
