import React, { useState, useEffect, useRef } from 'react';
import BlogWrapper from './BlogWrapper';
import BlogPopup from './BlogPopup';
import DOMPurify from 'isomorphic-dompurify';

function BlogDisplay({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const blogRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const totalPages = Math.ceil(posts.length / blogsPerPage);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
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
      <div
        className="flex items-center justify-center rounded-full bg-gray-400 text-white font-semibold text-lg w-10 h-10"
      >
        {initial}
      </div>
    );
  };

  // Paginate blogs
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = posts.slice(startIndex, startIndex + blogsPerPage);

  // Scroll to the blog container smoothly
  const scrollToBlogContainer = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      scrollToBlogContainer();
    }
  };

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen" ref={blogRef}>
      <ul className="mx-4 p-10 max-w-5xl">
        {currentBlogs.map((post, index) => (
          <li key={post.id}>
            <BlogWrapper handlePostClick={() => handlePostClick(post)} post={post} isSent={index % 2 === 0}>
              <div className="p-2">
                <h2 className="text-2xl font-semibold text-gray-800 my-2">{post.title}</h2>
                <p className="text-gray-400 text-xs text-left font-bold my-2">{post.date}</p>
                <p className="text-gray-600 text my-2">
                  {stripMarkdownAndHTML(post.content).substring(0, 100) + '...'}
                </p>
                <div className="flex flex-row items-center gap-2">
                  <AuthorIcon name={post.author} />
                  <span className="text-gray-400 text-xs font-bold">{post.author}</span>
                </div>
              </div>
            </BlogWrapper>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* BlogPopup component for displaying the full post */}
      <BlogPopup selectedPost={selectedPost} closeModal={closeModal} />
    </div>
  );
}

export default BlogDisplay;
