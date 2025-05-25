import React, { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('/db/profile.json')
      .then(res => res.json())
      .then(data => setProfile(Array.isArray(data) ? data[0] : data))
      .catch(err => console.error(err));

    fetch('/db/followers.json')
      .then(res => res.json())
      .then(data => setFollowers(data))
      .catch(err => console.error(err));

    fetch('/db/suggestions.json')
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.error(err));
  }, []);

  const handleOnChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = () => {
    console.log("Updated profile:", profile);
    alert("Profile updated (not saved to file — static JSON)");
  };

  const handleUnFollow = (id) => {
    const updatedFollowers = followers.filter(f => f.id !== id);
    setFollowers(updatedFollowers);
    alert("Unfollowed (not saved to file — static JSON)");
  };

  const handleFollow = (user) => {
    if (!followers.find(f => f.id === user.id)) {
      setFollowers(prev => [...prev, user]);
      alert(`Followed ${user.username} (not saved to file — static JSON)`);
    }
  };

  return (
    <div className="m-10 max-w-md mx-auto">
      {profile ? (
        <div>
          <img
            src={profile.profilePic}
            className="w-20 h-20 object-cover rounded-full mb-4"
            alt="Profile"
          />
          <h5 className="text-lg font-semibold">{profile.username}</h5>

          <input
            type="text"
            value={profile.username}
            name="username"
            className="block w-full my-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            onChange={handleOnChange}
          />

          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            className="block w-full my-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            onChange={handleOnChange}
          />

          <button
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}

      <hr className="my-6" />

      <h3 className="text-lg font-semibold mb-2">Followers</h3>
      {followers.length > 0 ? (
        followers.map((follower, index) => (
          <div
            key={`${follower.id}-${index}`}
            className="grid grid-cols-2 items-center m-2 pl-4"
          >
            <span>{follower.username}</span>
            <button
              className="text-blue-600"
              onClick={() => handleUnFollow(follower.id)}
            >
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <div>No followers found.</div>
      )}

      <hr className="my-6" />

      <h3 className="text-lg font-semibold mb-2">Suggestions</h3>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <div
            key={`sugg-${suggestion.id}-${index}`}
            className="grid grid-cols-2 items-center m-2 pl-4"
          >
            <span>{suggestion.username}</span>
            <button
              className="text-green-600"
              onClick={() => handleFollow(suggestion)}
            >
              Follow
            </button>
          </div>
        ))
      ) : (
        <div>No suggestions available.</div>
      )}
    </div>
  );
}

export default Profile;
