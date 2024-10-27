

"use client";
import { useState } from 'react';
import BlogSearch from './BlogSearch';

export default function Blog() {
  const [posts] = useState([
    { id: 1, 
      author:'William Shakespeare', 
      date:'Sep 14,1601', 
      title: 'Love all, truest a few, do wrong to none.', 
      content: "The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation.", 
      description: "The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation. The club De-Lit hath this day planted its seed in the soil of a world beset. Verily, 'tis a noble beginning for a newly forged, enthusiastic band. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. As a humble poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation."
    },
    { id: 2, 
      author:'Person 2', 
      date:'Oct 10,2024', 
      title: 'Second Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 3, 
      author:'Person 3', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
  ]);

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen">
      {/*Blog Page Title*/}
      <h1 className="lg:text-[6rem] md:text-[3rem] text-[2.5rem] text-center tracking-wide">Blog</h1>
      <p className='text-center'>Stay informed, inspired, and connected with our blog</p>

      <BlogSearch posts={posts} />
      
      
    </div>
  );
}
