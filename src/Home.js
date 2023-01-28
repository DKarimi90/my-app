import React, {useState, useEffect} from 'react'
import Bloglist from './Bloglist'
import useFetch from './Fetch'

function Home( ) {
const { data: blogs , isLoading, err } = useFetch ("http://localhost:3001/blogs")


    
  return (
    <div className='home'>
      { err && <div> {err}</div>}
      { isLoading && <div>Loading.....</div>}
        {blogs && <Bloglist blogs = {blogs} heading = "All Blogs" />}
       
        
    </div>
  )
  }

export default Home

