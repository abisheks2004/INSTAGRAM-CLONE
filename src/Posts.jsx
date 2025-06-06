import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts, setPosts] = useState([])

 useEffect(() => {
    fetch('/data/posts.json')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts)) // because your JSON has { "posts": [ ... ] }
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);



  return (
    <div className='flex flex-col items-center justify-center cursor-sc'>
    {
    posts.length > 0 ? (
      <div>
      {
      posts.map((post) =>(
      <div key={post.id} >
         <div className='flex items-center gap-2 mt-2'>
          <img className='rounded-full h-[30px] w-[30px] mt-2 mb-2' src={post.profilePic} alt='profile pic' />
          <h5>{post.username}</h5>
         </div>
          <img className='w-[300px] h-[250px] object-cover' src={post.image} alt='post pic' />
            
          <div className='flex items-center gap-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
          </div>
          <div>
             <b>{post.likes}</b> <b>LIKES</b>
          </div>
           <p>{post.caption}</p>
      </div>
      ))} 
      </div>
    ):(
      <div>
          loading page......
      </div>
    )
    }
    </div>
  )
}

export default Posts