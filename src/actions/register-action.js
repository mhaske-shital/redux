import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/register-constant";
import axios from "axios";
export const userRegisterAction = (user) => async(dispatch) => {
    try {
        dispatch({ type:USER_REGISTER_REQUEST})
        const { data } = await axios.post(`${process.env.REACT_APP_BLOG_URL}/api/user/register`,user);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.result })
        console.log(data.result);
    } catch (error) {
     dispatch({ type: USER_REGISTER_FAIL,payload:error})
    }
 }