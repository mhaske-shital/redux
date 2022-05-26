import axios from "axios";
import {BLOG_REQUEST,BLOG_SUCCESS,BLOG_FAIL,
  SINGLE_BLOG_REQUEST,
  SINGLE_BLOG_SUCCESS,
  SINGLE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_REQUEST
} from "../constants/blog-constants"
export const getAllBlogAction=()=> async(dispatch)=>{
  try {
    dispatch({type:BLOG_REQUEST});
    
    const {data}=await axios.get(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs`);
    // console.warn(data.data);
    dispatch({type:BLOG_SUCCESS,payload:data.data});
  } catch (error) {
      dispatch({type:BLOG_FAIL,payload: error});
  }
};

export const getSingleBlogAction=(match)=> async(dispatch)=>{
  try {
    dispatch({type:SINGLE_BLOG_REQUEST});
    const {data}=await axios.get(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs/${match.params.id}`);
    console.error(data.data);
    dispatch({type:SINGLE_BLOG_SUCCESS,payload:data.data});
  } catch (error) {
      dispatch({type:SINGLE_BLOG_FAIL,payload:error});
  }
};


export const getDeleteBlogAction=(id)=> async(dispatch)=>{
  try {
    dispatch({type:DELETE_BLOG_REQUEST});
    const {data}=await axios.delete(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs/${id}`);
    console.error(data.data);
    dispatch({type:DELETE_BLOG_SUCCESS,payload:data.data});
  } catch (error) {
      dispatch({type:DELETE_BLOG_FAIL,payload:error});
  }
};

export const UpdateBlogAction=(id,result)=> async(dispatch)=>{
  try {
    dispatch({type:UPDATE_BLOG_REQUEST});
    console.warn(result , id);
    const {data}=await axios.put(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs/${id}`,result);
    // console.error(data);
    dispatch({type:UPDATE_BLOG_SUCCESS,payload:data});
  } catch (error) {
      dispatch({type:UPDATE_BLOG_FAIL,payload:error});
  }
};
