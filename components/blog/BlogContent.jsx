

"use client";
import { useState } from 'react';
import BlogWrapper from './BlogWrapper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Blog() {
  const [posts] = useState([
    { id: 1, author:'William Shakespeare', date:'Sep 14,1601', title: 'Love all, truest a few, do wrong to none.', content: "The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation." },
    { id: 2, author:'Person 2', date:'Oct 10,2024', title: 'Second Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, author:'Person 3', date:'Oct 10,2024', title: 'Third Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ]);

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Blog</h1>
      <ul className="mx-4
       max-w-7xl">
        {posts.map((post) => (
          <li key={post.id} >
            
            <BlogWrapper isSent={post.id%2==0}>
            <AccountCircleIcon/> <span className='font-bold'>{post.author}</span>

            <h2 className="text-2xl font-semibold text-gray-800 my-2">
              {post.title}
            </h2>
            <p className="text-gray-600 my-2">{post.content}</p>
            <p className='text-gray-400 text-xs font-bold my-2'>{post.date}</p>
              
            </BlogWrapper>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
