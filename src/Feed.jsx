import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

function Feed() {
  return (
    <div>
      <div className="border-b border-gray-200 overflow-hidden fixed top-0 left-0  lg:left-64 right-0 bg-gray-100 z-50 h-20">
        <Stories />
      </div>

      <div className="mt-20">
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
