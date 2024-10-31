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
    <div className="container  mx-auto p-4">
      <div className='p-2 text-center  flex    justify-center '>
      <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="p-2 border border-gray-300 w-2/4 md:w-2/12 rounded-3xl"
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
          className="md:w-1/2 p-2 border border-gray-300 rounded-3xl"
        />

        
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
