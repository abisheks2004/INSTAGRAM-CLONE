import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Stories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/story')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch stories');
        return res.json();
      })
      .then((data) => setStories(data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load stories.');
      });
  }, []);

  return (
    <div className="flex gap-4 overflow-x-auto p-2 cursor-pointer">
      {error && <p className="text-red-500">{error}</p>}
      {stories.length > 0 ? (
        stories.map((story) => (
          <div
            key={story.id}
            onClick={() => navigate(`/story/${story.id}/${stories.length}`)}
            className="flex flex-col items-center"
            role="button"
            tabIndex={0}
          >
            <div className="border-2 border-orange-500 rounded-full bg-gradient-to-r from-red-400 via-blue-600 to-pink-600 p-0.5">
              <img
                src={story.profilePic}
                alt={`${story.username}'s profile`}
                className="rounded-full w-10 h-10 object-cover"
              />
            </div>
            <p className="truncate text-xs w-12 text-center mt-1">{story.username}</p>
          </div>
        ))
      ) : (
        !error && <p>Loading stories...</p>
      )}
    </div>
  );
}

export default Stories;
