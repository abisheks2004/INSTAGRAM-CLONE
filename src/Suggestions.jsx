import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingFollowIds, setLoadingFollowIds] = useState(new Set());
  const [followed, setFollowed] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const res = await fetch('/instagram-clone/data/profile.json');
      const data = await res.json();
      setProfile(data.profile);
    }

    async function fetchSuggestions() {
      const res = await fetch('/instagram-clone/data/suggestions.json');
      const data = await res.json();
      setSuggestions(data.suggestions);
    }

    fetchProfile();
    fetchSuggestions();
  }, []);

  const handleFollow = (id, username) => {
    if (loadingFollowIds.has(id)) return;

    setLoadingFollowIds((prev) => new Set(prev).add(id));

    // Simulate network delay
    setTimeout(() => {
      setFollowed((prev) => new Set(prev).add(id));

      setLoadingFollowIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });

      alert(`Followed ${username} (simulated)`);
    }, 800);
  };

  return (
    <div className="h-screen bg-white p-4 relative z-50">
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 sm:hidden py-1 font-semibold bg-gray-200 hover:bg-gray-300 rounded"
        >
          Close
        </button>
      </div>

      {/* Profile Section */}
      {profile && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-[30px] w-[30px] object-cover"
              src={profile.profilePic}
              alt="profile"
            />
            <h5 className="font-medium">{profile.username}</h5>
          </div>
        </div>
      )}

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-500">Suggested for you</p>
      </div>

      {/* Suggestions List */}
      {suggestions.map((s) => (
        <div key={s.id} className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              src={s.profilePic}
              alt={s.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm font-medium">{s.username}</p>
          </div>
          <button
            onClick={() => handleFollow(s.id, s.username)}
            className="text-blue-600 text-sm font-medium"
            disabled={loadingFollowIds.has(s.id) || followed.has(s.id)}
          >
            {followed.has(s.id)
              ? 'Followed'
              : loadingFollowIds.has(s.id)
              ? 'Following...'
              : 'Follow'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
