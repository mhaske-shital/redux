import React,{useState,useEffect} from 'react'
import BlogCard from '../components/BlogCard'
import { getAllBlogAction } from '../actions/action'
import { useSelector,useDispatch} from 'react-redux'

export default function Home() {
    
     const dispatch=useDispatch()
     const {reduxBlog,isLoading}=useSelector(state=>state.blog)
     useEffect(() => {
        dispatch(getAllBlogAction())
     }, [])
    // const [blog, setblog] = useState([])
    // useEffect(() => {
    //     const getAllBlog=async()=>{
    //         const {data}=await axios.get("http://localhost:5000/api/v1/blogs")
    //         console.log(data.data);
    //         setblog(data.data)
    //     }
    //     getAllBlog()
         
    // }, [])
   
    return (
     
        <div className='container w-75 '>
            <div className="col col-sm-6 offset-2 ">
                {
                     isLoading ? <div className='spinner spinner-border'></div>:
                     reduxBlog.map(item=>(
                        <div>
                            <div className='bg-warning mt-3 text-uppercase'  key={item._id}>
                            <BlogCard singleBlog={item}/>
                         </div>
                        </div>
                        ))
                }
                 
            </div>

            
        </div>
        
    )
}
