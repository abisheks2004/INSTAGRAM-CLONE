import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [profileRes, followersRes] = await Promise.all([
        fetch('/instagram-clone/data/profile.json').then(res => res.json()),
        fetch('/instagram-clone/data/followers.json').then(res => res.json())
      ]);
      setProfile(profileRes.profile);
      setFollowers(followersRes.followers);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Simulate update
  const handleUpdate = () => {
    alert('Since this is static JSON, changes are not saved.');
    console.log('Updated profile (simulated):', profile);
  };

  // Simulate unfollow
  const handleUnFollow = (id) => {
    const updatedFollowers = followers.filter(f => f.id !== id);
    setFollowers(updatedFollowers);
    alert('Unfollowed (simulated)');
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-md mx-auto relative h-screen bg-white">
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 font-semibold bg-gray-200 hover:bg-gray-300 rounded"
        >
          Close
        </button>
      </div>

      {/* Profile Section */}
      {profile && (
        <div className="mb-6">
          <img
            src={profile.profilePic}
            alt="profile"
            className="w-20 h-20 object-cover rounded-full mb-2"
          />
          <h5 className="text-lg font-medium mb-2">{profile.username}</h5>

          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleOnChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-2"
            placeholder="Username"
          />

          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            onChange={handleOnChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Profile Picture URL"
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}

      {/* Followers Section */}
      <h3 className="text-md font-semibold mb-3">Followers</h3>
      {followers.length > 0 ? (
        followers.map((follower) => (
          <div
            key={follower.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{follower.username}</span>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handleUnFollow(follower.id)}
            >
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No followers found.</p>
      )}
    </div>
  );
}

export default Profile;
