import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogCard({singleBlog}) {
    return (
        <div>
            <div className="border align-items-center mt-3 d-flex justify-content-between p-3">
                <div>
                    <img src={`${process.env.REACT_APP_BLOG_URL}/${singleBlog.image}`} height={100} width={160} alt="" />
                    <h2>{singleBlog.title}</h2>
                        <p className='text-muted'>{singleBlog.shortDesc}</p>
                </div>
                    <Link to={`/blog-details/${singleBlog._id}`} className="btn btn-success btn-sm rounded-pill">Show Details</Link>
                </div>
        </div>
    )
}

