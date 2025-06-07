import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {

  const [Stories, setStories] = useState([])

  const  navigate = useNavigate()

  let tot = 0
  
useEffect(() => {
  fetch('/instagram-clone/data/story.json')
    .then((res) => res.json())
    .then((data) => setStories(data.story)) // assuming your JSON has a "story" array
    .catch((err) => console.log(err));
}, []);


  return (
    <div className='flex  gap-4 overflow-x-auto p-2  cursor-pointer'>
    <div className="hidden"> {tot = Stories.length}</div>
    {Stories.length >0 ? (
      Stories.map((story)=>(
        <div key={story.id} onClick={()=>{navigate(`/story/${story.id}/${tot}`)}} >
         <div className='border-2 border-orange-500 rounded-full bg-gradient-to-r from-red-400 via-blue-600 to-pink-600'>
        <img src={story.profilePic} alt='dp' className='rounded-full w-10 h-10 object-cover'></img>
      </div>  
       <p className="truncate text-xs  w-12">{story.username}</p>
        </div>
      ))
    )
      :(

      <p>Loading...</p>
       )
       }
       </div>
      )
}

export default Stories