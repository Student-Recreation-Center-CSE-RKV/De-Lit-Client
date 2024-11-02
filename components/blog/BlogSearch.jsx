import React, { useState } from 'react';
import BlogDisplay from './BlogDisplay';

const BlogSearch = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('title');

  // Filter posts based on the search term and selected search field
  const filteredPosts = posts.filter(post =>
    post[searchField].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-10 mx-auto p-4">
      <div className='p-2 text-center  flex justify-center '>
        <div className='flex w-1/2 flex-row justify-center items-center p-2 rounded-full transition-all duration-200 focus-within:shadow-lg focus-within:ring-0 bg-white'>
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="px-4 py-2 bg-mywhite border border-none  rounded-3xl"
        >
          <option value="title">Title</option>
          <option value="content">Content</option>
          <option value="author">Author</option>
          <option value="date">Date</option>
        </select>
        
        <input
          type="text"
          placeholder={`Search by ${searchField}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" px-4 py-2 text-gray-900 rounded-full focus:outline-none flex-grow-[2] border-none"
        />

        </div>
      

        
      </div>

      <div className=''>
        {filteredPosts.length > 0 ? (
          <BlogDisplay posts={filteredPosts} />
        ) : (
          <p className='text-center'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
