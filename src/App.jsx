import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewStory() {
  const { id, tot } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);
  const totalStories = Number(tot);
  const [story, setStory] = useState(null);

  useEffect(() => {
    if (numericId > totalStories || numericId <= 0 || isNaN(numericId)) {
      navigate('/');
      return;
    }

    fetch(`http://localhost:3001/story/${numericId}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => {
        console.error(err);
        navigate('/');
      });
  }, [numericId, totalStories, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {story ? (
        <div className="flex items-center gap-10">
          {/* Left Arrow */}
          {numericId > 1 && (
            <Link to={`/story/${numericId - 1}/${totalStories}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-gray-600 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          )}

          {/* Story Image */}
          <img
            src={story.image}
            alt="story"
            className="max-w-[300px] max-h-[500px] rounded-lg shadow-lg object-cover"
          />

          {/* Right Arrow */}
          {numericId < totalStories && (
            <Link to={`/story/${numericId + 1}/${totalStories}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-gray-600 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default ViewStory;
