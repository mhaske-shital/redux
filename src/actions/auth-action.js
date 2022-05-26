import axios from "axios"
import { USER_LOGIN_FAIL,USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/auth-constants"

export const loginUserAction = (loginCredentials) => async(dispatch,getState) => {
   try {
    dispatch({ type: USER_LOGIN_REQUEST })
       const { data } = await axios.post(`${process.env.REACT_APP_BLOG_URL}/api/auth/login`,loginCredentials)
       console.log(data);
       dispatch({ type: USER_LOGIN_SUCCESS, payload:{ info: data.result, token: data.token ,success:data.success } })
       const x = getState().user.userInfo;
       localStorage.setItem("user",JSON.stringify(x))
   } catch (error) {
       dispatch({type:USER_LOGIN_FAIL,payload:error})
   }
} 

export const userLogoutAction = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT })
     localStorage.removeItem("user")
}