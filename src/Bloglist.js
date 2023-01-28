import React from 'react'

function Bloglist( {blogs, heading } ) {
  return (
    <div className='blog-list'>
        <h1 style = {{
            textAlign: "center"
        }
        }>{heading}</h1>
         {blogs.map((blog, index) => (
            <div className='blog-content' key = {index}>
               <h2>{ blog.title }</h2>
               <p>Written by {blog.author}</p> 
              
              
            </div>
        ))}
    </div>
  )
}

export default Bloglist
