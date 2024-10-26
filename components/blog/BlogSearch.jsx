import React, { useState } from 'react';
import BlogDisplay from './BlogDisplay';

const BlogSearch = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on the search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
        <div className=' p-2 align-middle text-center items-center justify-center'>
            <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-3xl"
            />
        </div>
      

      <div>
        {filteredPosts.length > 0 ? <BlogDisplay posts={filteredPosts}/> : (
          <p className='text-center'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
