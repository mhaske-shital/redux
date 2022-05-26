import {BLOG_REQUEST,BLOG_SUCCESS,BLOG_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_SUCCESS,
    SINGLE_BLOG_FAIL,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_FAIL,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_FAIL
} from '../constants/blog-constants'
export const getAllBlogReducer=(
    state={reduxBlog:[]},
    {type,payload})=>{
 switch (type) {
     case BLOG_REQUEST : return{reduxBlog:[],isLoading:true}
     case BLOG_SUCCESS : return{reduxBlog:payload,isLoading:false}
     case BLOG_FAIL : return {reduxBlog:payload,isLoading:false}
      
     default: return state;
        
 }
}

export const getSingleBlogReducer=(
    state={reduxSingleBlog:{}},
    {type,payload})=>{
 switch (type) {
     case SINGLE_BLOG_REQUEST : return{reduxSingleBlog:{},isLoading:true}
     case SINGLE_BLOG_SUCCESS : return{reduxSingleBlog:payload,isLoading:false}
     case SINGLE_BLOG_FAIL : return {reduxSingleBlog:payload,isLoading:false}
      
     default: return state;
        
 }
}

export const DeleteBlogReducer=(
    state={reduxDeleteBlog:{}},
    {type,payload})=>{
 switch (type) {
     case DELETE_BLOG_REQUEST : return{reduxDeleteBlog:{},isLoading:true}
     case DELETE_BLOG_SUCCESS : return{reduxDeleteBlog:payload,isLoading:false}
     case DELETE_BLOG_FAIL : return {reduxDeleteBlog:payload,isLoading:false}
      
     default: return state;
        
 }
}


export const UpdateBlogReducer=(
    state={reduxUpdateBlog:{}},
    {type,payload})=>{
 switch (type) {
     case UPDATE_BLOG_REQUEST : return{reduxUpdateBlog:{},isLoading:true}
     case UPDATE_BLOG_SUCCESS : return{reduxUpdateBlog:{},isLoading:false}
     case UPDATE_BLOG_FAIL : return {reduxUpdateBlog:payload,isLoading:false}
      
     default: return state;
        
 }
}