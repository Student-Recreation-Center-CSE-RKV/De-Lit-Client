import React, { useState, useEffect } from 'react';
import BlogPopup from './BlogPopup';
import DOMPurify from 'isomorphic-dompurify';

const RecentBlogs = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    // Disable scroll when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
    // Re-enable scroll when modal is closed
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    // Cleanup overflow style on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const stripMarkdownAndHTML = (text) => {
    const cleanHTML = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
    return cleanHTML.replace(/[*_~`#>-]/g, '');
  };

  const AuthorIcon = ({ name }) => {
    const initial = name ? name.charAt(0).toUpperCase() : '?';

    return (
      <div className="flex items-center justify-center rounded-full bg-gray-400 text-white font-semibold text-lg w-10 h-10">
        {initial}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => handlePostClick(post)} // Corrected here
          className="p-4 border bg-white rounded-xl shadow-md 
                     transition duration-200 ease-in-out transform hover:scale-[1.01] cursor-pointer hover:shadow-lg"
        >
          <div className="p-2">
            <h2 className="text-2xl font-semibold text-gray-800 my-2">
              {post.title}
            </h2>
            <p className="text-gray-400 text-xs text-left font-bold my-2">{post.date}</p>
            <p className="text-gray-600 text my-2">
              {stripMarkdownAndHTML(post.content).substring(0, 100) + '...'}
            </p>
            <div className="flex flex-row items-center gap-2">
              <AuthorIcon name={post.author} />
              <span className="text-gray-400 text-xs font-bold">{post.author}</span>
            </div>
          </div>
        </div>
      ))}
      {/* BlogPopup component for displaying the full post */}
      {selectedPost && <BlogPopup selectedPost={selectedPost} closeModal={closeModal} />}
    </div>
  );
};

export default RecentBlogs;
