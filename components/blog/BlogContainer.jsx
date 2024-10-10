

"use client";
import { useState } from 'react';

export default function Blog() {
  const [posts] = useState([
    { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the third post.' },
  ]);

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 my-8">Blog</h1>
      <ul className="w-full max-w-2xl">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
