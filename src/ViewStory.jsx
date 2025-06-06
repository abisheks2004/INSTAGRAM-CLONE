import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewStory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if invalid ID
    const numericId = parseInt(id);
    const total = parseInt(tot);

    if (numericId > total || numericId <= 0) {
      navigate('/');
      return;
    }

    fetch('/data/story.json')
      .then((res) => res.json())
      .then((data) => {
        const match = data.story.find((item) => item.id === id || item.id === String(numericId));
        setStory(match);
      })
      .catch((err) => console.log(err));
  }, [id, tot, navigate]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      {/* Previous Button */}
      {parseInt(id) > 1 && (
        <Link to={`/story/${Number(id) - 1}/${tot}`} className="mr-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      )}

      {/* Story Image */}
      <img src={story.image} alt="story" className="w-80 h-auto rounded-lg shadow-md" />

      {/* Next Button */}
      {parseInt(id) < parseInt(tot) && (
        <Link to={`/story/${Number(id) + 1}/${tot}`} className="ml-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default ViewStory;
