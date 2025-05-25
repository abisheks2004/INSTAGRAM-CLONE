import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [unfollowed, setUnFollowed] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/profile')
      .then(data => setProfile(data.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:3001/followers')
      .then(data => setFollowers(data.data))
      .catch(err => console.log(err));
  }, [unfollowed]);

  function HandleOnChange(e) {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleUpdate = async () => {
    axios.put('http://localhost:3001/profile', profile)
      .then(() => console.log("Updated"))
      .catch(err => console.log(err));
  };

  const handleUnFollow = async (id) => {
    axios.delete(`http://localhost:3001/followers/${id}`)
      .then(() => {
        alert("Unfollowed");
        setUnFollowed(prev => prev + 1);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {profile ? (
        <div className='m-10'>
          <img src={profile.profilePic} className='w-20 h-20 object-cover rounded-full' alt='profile' />
          <h5>{profile.username}</h5>

          <input
            type="text"
            value={profile.username}
            name="username"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={HandleOnChange}
          />

          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={HandleOnChange}
          />

          <button
            className='bg-blue-500 text-white p-2 rounded-md mt-4'
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}

      {followers.length > 0 ? (
        followers.map(follower => (
          <div key={follower.id} className='grid grid-cols-2 m-3 pl-8'>
            {follower.username}
            <button
              className='text-blue-600 self-end'
              onClick={() => handleUnFollow(follower.id)}
            >
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <div>Loading followers...</div>
      )}
    </div>
  );
}

export default Profile;
