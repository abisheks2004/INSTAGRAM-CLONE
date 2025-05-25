import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [followedIds, setFollowedIds] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load profile.');
      });

    fetch('http://localhost:3001/suggestions')
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load suggestions.');
      });
  }, []);

  const handleFollow = async (id, username) => {
    try {
      await axios.post('http://localhost:3001/followers', {
        id,
        username,
      });
      setFollowedIds((prev) => [...prev, id]);
    } catch (err) {
      console.error('Error following user:', err);
      setError('Failed to follow user.');
    }
  };

  return (
    <div className="w-[75%] m-10 space-y-6">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Profile Section */}
      {profile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-[30px] w-[30px] object-cover"
              src={profile.profilePic}
              alt={`${profile.username}'s profile`}
            />
            <h5 className="font-medium">{profile.username}</h5>
          </div>
          <p className="text-blue-600 cursor-pointer font-medium">Switch</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      {/* Suggestions Header */}
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
                  alt={`${suggestion.username}'s profile`}
                />
                <h5 className="text-sm font-medium">{suggestion.username}</h5>
              </div>
              {followedIds.includes(suggestion.id) ? (
                <span className="text-gray-400 text-sm font-medium">Following</span>
              ) : (
                <button
                  className="text-blue-600 text-sm font-medium hover:underline"
                  onClick={() => handleFollow(suggestion.id, suggestion.username)}
                  role="button"
                >
                  Follow
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        !error && <p>Loading suggestions...</p>
      )}
    </div>
  );
}

export default Suggestions;
