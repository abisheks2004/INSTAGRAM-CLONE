import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ViewStory() {
  const {id, tot} = useParams()
 const [story,setStory]= useState(null)
  const Navigate = useNavigate()

 useEffect(()=>{
  fetch(`http://localhost:3001/story/${id}`)
  .then((data) => data.json())
  .then(data => setStory(data))
  .catch(err => console.log(err))
 },[id])

 if(id > tot || id <=0){
  Navigate('/')
 }

  return (
    <div>
       {story ?  (
      <div className="flex justify-center items-center">
        <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} className='mr-10 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </Link>
       <img src={story.image} alt='mkk' className='w-70 h-75 mt-30 '/>
       <  Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`} className='ml-10 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13">
         <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
       </svg>
       </Link>
      </div> ):(
       <div>Loading..v.</div>)}
    </div> 
  )
}

export default ViewStory


