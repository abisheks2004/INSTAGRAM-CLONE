import React, { useEffect, useState } from 'react';

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch profile from static JSON
    fetch('/db/profile.json')
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    // Fetch suggestions from static JSON
    fetch('/db/suggestions.json')
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);

  // Mock follow function — just alerts and optionally updates UI
  const handleFollow = (id, username) => {
    alert(`Followed ${username}`);
    // Optional: Remove followed user from suggestions list
    setSuggestions((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="w-[75%] m-10 space-y-6">
      {/* Profile Section */}
      {profile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-[30px] w-[30px] object-cover"
              src={profile.profilePic}
              alt="profile pic"
            />
            <h5 className="font-medium">{profile.username}</h5>
          </div>
          <p className="text-blue-600 cursor-pointer font-medium">Switch</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Suggested Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Suggested for you</p>
        <b className="text-sm cursor-pointer">See All</b>
      </div>

      {/* Suggestions List */}
      {suggestions.length > 0 ? (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-[30px] w-[30px] object-cover"
                  src={suggestion.profilePic}
                  alt="profile pic"
                />
                <h5 className="text-sm font-medium">{suggestion.username}</h5>
              </div>
              <a
                className="text-blue-600 text-sm cursor-pointer font-medium"
                onClick={() => {
                  handleFollow(suggestion.id, suggestion.username);
                }}
              >
                Follow
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading suggestions...</p>
      )}
    </div>
  );
}

export default Suggestions;
