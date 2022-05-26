import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/auth-constants";

export const userLoginReducer = (state={},{type,payload}) => {
    switch (type) {
        case USER_LOGIN_REQUEST : return{ isloding:true}
        case USER_LOGIN_SUCCESS : return{isloding:false,userInfo:payload}
        case USER_LOGIN_FAIL: return {isloding:false,userInfoError:payload}
        case USER_LOGOUT: return {}
        default:
             return state
    }
}     