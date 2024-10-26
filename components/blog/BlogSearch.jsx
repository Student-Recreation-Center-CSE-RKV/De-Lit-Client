import React, { useState } from 'react';

const BlogSearch = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on the search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
        <div className='outline-dashed p-2 align-middle items-center justify-center'>
            <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
        </div>
      

      {/* <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="p-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div> */}
    </div>
  );
};

export default BlogSearch;
