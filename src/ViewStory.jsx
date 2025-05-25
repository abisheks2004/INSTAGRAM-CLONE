import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewStory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storyId = Number(id);

    if (storyId > Number(tot) || storyId <= 0) {
      navigate('/');
      return;
    }

    fetch('/db/story.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedStory = data.find((s) => s.id === storyId);
        setStory(selectedStory);
      })
      .catch((err) => console.error(err));
  }, [id, tot, navigate]);

  const prevId = Number(id) - 1;
  const nextId = Number(id) + 1;

  return (
    <div>
      {story ? (
        <div className="flex justify-center items-center">
          {prevId > 0 && (
            <Link to={`/story/${prevId}/${tot}`} className="mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-13"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          )}

          <img src={story.image} alt="story" className="w-70 h-75 mt-30" />

          {nextId <= Number(tot) && (
            <Link to={`/story/${nextId}/${tot}`} className="ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-13"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ViewStory;
