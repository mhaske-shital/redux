import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getSingleBlogAction } from '../actions/action'
export default function Blogdetails({match}) {
    const  dispatch=useDispatch()
    const {reduxSingleBlog,isLoading}=useSelector(state=>state.BlogDetails)
    useEffect(() => {
        dispatch(getSingleBlogAction(match))
      }, [])
    return (
        
        <div >
           
            {/* {
                JSON.stringify(match.params.id)
            } */}
            <div className='container mt-3 '>
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div className="card">
                        <div className="card-header text-center  bg-info"><h1 className='font-weight-bold'>Blog Details</h1></div>
                    <div className="card-body border bg-warning "><br/>
                        <h1 className='font-weight-bold'>BLOG NAME: <span className='text-uppercase'>{reduxSingleBlog.title}</span></h1>
                        <h1>Short Description: <span className="text-muted text-capitalize"> {reduxSingleBlog.shortDesc}</span> </h1>
                        <h1>Description:<span className="text-muted text-capitalize">{reduxSingleBlog.desc}</span></h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-">
                            <button className='btn btn-sm btn-light mt-4'>back</button>
                        <div className="border mt-4 p-4">
                            <h1>{reduxSingleBlog.title}</h1>
                            <span>{reduxSingleBlog.shortDesc}</span> 
                        </div>
                       
                    </div>
                </div>
            </div> */}
        </div>
    )
}
