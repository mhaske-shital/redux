import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
export default function Navbar() {
    const dispatch= useDispatch()
    const { userInfo } = useSelector(state => state.user)
    
    return (
        <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><h1 className='font-weight-bold'>BLOG</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link active" aria-current="page" to="/add-blog">Add Blog</Link>
                                <Link className="nav-link active" to='/logout' >Logout</Link>
                                <Link className="nav-link active" to='/login' >login</Link> */}
                                {/* <Link className="nav-link active" aria-current="page" to="/delete-blog">Delete Blog</Link> */}

                                 {
                            userInfo
                                ?<div className="dropdown mt-1">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  {userInfo?.info?.name}
                                </button>
                                <ul className="dropdown-menu bg-info " aria-labelledby="dropdownMenuButton1">
                      
                      <li><Link className="dropdown-item text-dark" aria-current="page" to="/home">all blogs</Link></li>
                      <li><Link className="dropdown-item text-dark" to='/logout' >Logout</Link></li>
                      </ul>
                                
                              </div>
                           :<ul>
                               <Link className='nav-link text-white' to="/">Login</Link>
                               {/* <Link className='nav-link text-white' to="/register">register</Link> */}
                           </ul>
                        } 
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
