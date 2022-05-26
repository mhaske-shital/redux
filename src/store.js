import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/auth-reducers"
import { userRegisterReducer } from "./reducers/register_reducer"

import thunk from "redux-thunk"
import { DeleteBlogReducer, getAllBlogReducer, getSingleBlogReducer, UpdateBlogReducer } from './reducers/blog-reducer';
const rootReducer=combineReducers({
    blog:getAllBlogReducer,
    BlogDetails:getSingleBlogReducer,
    deleteBlog:DeleteBlogReducer,
    updateBlog:UpdateBlogReducer,
    user: userLoginReducer,
    registed: userRegisterReducer,
});
const userInfoFromLocalStore = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))  
: undefined;  
const initial = { 
 
user: {   
    userInfo:userInfoFromLocalStore 
}
};

const store =createStore (
    rootReducer,
    initial, 
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;