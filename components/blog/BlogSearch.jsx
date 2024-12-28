import React, { useState } from 'react';
import BlogDisplay from './BlogDisplay';
import RecentBlogs from './RecentBlogs.jsx';

const BlogSearch = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('title');
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);

  // Filter posts based on the search term and selected search field
  const filteredPosts = posts.filter(post =>
    post[searchField].toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Extract the latest 9 blogs
  const latestPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (descending)
    .slice(0, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recent Blogs Section */}
      <div className="mb-12 bg-mywhite ">
        <h2 className="text-3xl font-semibold text-center mt-8 mb-6">Latest Blogs</h2>
        <RecentBlogs posts={latestPosts} />
      </div>

      {/* Show More Blogs Button */}
      {!showMoreBlogs && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMoreBlogs(true)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-all"
          >
            Show More Blogs <span className="text-lg">{String.fromCharCode(0x2193)}</span>


          </button>
        </div>
      )}

      {/* Search Bar and Filtered Blogs Section */}
      {showMoreBlogs && (
        <>
          {/* Search Bar */}
          <div className="pt-12">
            <div className="flex justify-center">
              <div className="flex items-center w-full md:w-2/3 lg:w-1/2 bg-white p-2 rounded-full relative overflow-hidden shadow-lg">
                <input
                  type="text"
                  placeholder={`Search by ${searchField}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow px-4 py-2 text-gray-900 rounded-full focus:outline-none border-none"
                />
                <select
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-3xl border border-gray-300 w-auto  relative"
                >
                  <option value="title">Title</option>
                  <option value="content">Content</option>
                  <option value="author">Author</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filtered Blogs Section */}
          <div className="mt-6">
            {filteredPosts.length > 0 ? (
              <BlogDisplay posts={filteredPosts} />
            ) : (
              <p className="text-center text-gray-500">No results found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogSearch;
