import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useSelector,useDispatch } from 'react-redux'
import{getAllBlogAction ,getDeleteBlogAction, UpdateBlogAction} from '../actions/action'
export default function Admin() {
    const [title, settitle] = useState("")
    const [shortDesc, setshortDesc] = useState("")
    const [desc, setdesc] = useState("")
    const [image,setimage]=useState()

    const [mtitle, setmtitle] = useState("")
    const [mshortDesc, setmshortDesc] = useState(" ")
    const [mdesc, setmdesc] = useState("")
    const [mimage,setmimage]=useState()

    const [result, setresult] = useState(false)
    const {reduxBlog,isLoading}=useSelector(state=>state.blog)
    const [updateId, setupdateId] = useState()

    // edit blog
   const  handleUpadateToBlog =async(e)=>{
       e.preventDefault()
       const fd = new FormData()
        fd.append("image", mimage)
        fd.append("title", mtitle)
        fd.append("shortDesc",mshortDesc)
        fd.append("desc", mdesc)
        const config = {
          headers: {
              "Content-Type": "multipart/form-data",
            
          }
      }
        const { data } = await axios.put(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs/${updateId}`, fd,config)
      await dispatch(getAllBlogAction())
   }
   const handleUpdatemodal =async(id)=>{
       setupdateId(id)
       console.log(updateId);
    const res =reduxBlog.filter(x=>x._id==id)
    console.log(res);
    setmtitle(res[0].title)
    setmshortDesc(res[0].shortDesc)
    setmdesc(res[0].desc)
    setmimage(res[0].image)
   }
   const handleImage = e => {
    console.log(e.target.files[0]);
    setimage(e.target.files[0])    
}
const handleUpdateImage = e =>{
  setmimage(e.target.files[0])
  console.log(e.target.files[0]);
  // console.warn(mimage);
}
    const handleAddToBlog = async (e) => {
        e.preventDefault()
       
        const fd = new FormData()
        fd.append("image", image)
        fd.append("title", title)
        fd.append("shortDesc",shortDesc)
        fd.append("desc", desc)
        const config = {
          headers: {
              "Content-Type": "multipart/form-data",
            
          }
      }
        const { data } = await axios.post(`${process.env.REACT_APP_BLOG_URL}/api/v1/blogs`, fd,config)
        
        setresult(data.success)
        await dispatch(getAllBlogAction())
    }
    const dispatch=useDispatch()
     
    useEffect(() => {
        dispatch(getAllBlogAction())
     }, [])
     let deletedata;
    return (
        <div className='container  text-uppercase'>
        <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-3">
                    <div className="card bg-warning">
                        <div className="card-header  bg-info text-center">
                            Add Blog
                        </div>
                        <div className="card-body">

                            {
                                result && <div className="alert alert-success font-weight-bold">Blog Added</div>
                            }
                            <form onSubmit={handleAddToBlog}>
                                <input value={title} onChange={e => settitle(e.target.value)} type="text" className="form-control text-capitalize" placeholder='Enter Blog Name' /><br />
                                <input value={shortDesc} onChange={e => setshortDesc(e.target.value)} type="text" className="form-control"placeholder='Enter Short Description' /><br />
                                <input value={desc} onChange={e => setdesc(e.target.value)} type="text" className="form-control"placeholder='Enter Description' /><br />
                                <input type="file" onChange={handleImage}  className='form-control'required /><br/>
                   
                                <button className="btn btn-info btn-lg w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                    {/* table start */}
                    {/* {
                        isLoading
                        ? <div className='spinner spinner-border'
                    } */}
                    <table className='table table-bordered table-warning mt-4 text-uppercase'>
                       <thead>
                          <tr>
                          <th>Title</th>
                           <th>Short Desc</th>
                           <th>publish</th>
                           <th>Image</th>
                           <th>action</th>
                          </tr>
                       </thead> 
                       <tbody>
                           {
                               reduxBlog.map(item=>(
                                <tr>
                                <td>{item.title}</td>
                                <td>{item.shortDesc}</td>
                                <td>{item.publish ? "publish":"unpublish"}</td>
                                <td> 
                                   
                                  <img src={`${process.env.REACT_APP_BLOG_URL}/${item.image}`} alt={item.image} height={100} width={100} />
                                </td>
                                <td>
                                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#editdata" onClick={()=>{
                                        handleUpdatemodal (item._id)
                                    }}  >edit</button>
                                    <button className='btn btn-success' onClick={                                         
                                          e=>{  deletedata=item._id   }                                     
                                    }
                                    data-bs-toggle="modal" data-bs-target="#delete">Delete</button>
                                </td>
                            </tr>
                               ))
                           }
                       </tbody>
                    </table>
                </div>
            </div>
             <div className="modal fade" id="delete" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="delete" aria-hidden="true">
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                     <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div className="modal-body">
                     <button className='btn btn-info' onClick={async()=>{
                       await  dispatch(getDeleteBlogAction(deletedata))
                        await dispatch(getAllBlogAction())
                     }} data-bs-dismiss="modal">yes</button>
                     <button className='btn btn-danger' data-bs-dismiss="modal">NO</button>
                   </div>
                    
                 </div>
               </div>
             </div>

             {/* edit modal  */}
             <div class="modal fade" id="editdata" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="editdata" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                     <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="modal-body">
                   <form onSubmit={handleUpadateToBlog}>
                                <input value={mtitle} onChange={e => setmtitle(e.target.value)} type="text" className="form-control" /><br />
                                <input value={mshortDesc} onChange={e => setmshortDesc(e.target.value)} type="text" className="form-control" /><br />
                                <input value={mdesc} onChange={e => setmdesc(e.target.value)} type="text" className="form-control" /><br />
                                <input type="file" onChange={handleUpdateImage} className='form-control' /><br/>
                                <button className="btn btn-success btn-lg " data-bs-dismiss>Add Blog</button>
                            </form>
                   </div>
                    
                 </div>
               </div>
             </div>
             

        </div>
    )
}

