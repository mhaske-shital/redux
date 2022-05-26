import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/register-constant";

export const userRegisterReducer = (state={RegistedUser:[]},{type,payload}) => {
    switch (type) {
        case USER_REGISTER_REQUEST:return{RegistedUser:[],isLoading:true}
        case USER_REGISTER_SUCCESS:return{RegistedUser:payload,isLoading:false}
        case USER_REGISTER_FAIL:return {RegistedUser:payload,isLoading:false}
        default:
            return state;
    }
}