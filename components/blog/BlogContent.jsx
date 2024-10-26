

"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import BlogWrapper from './BlogWrapper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaTimes } from 'react-icons/fa';
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

   // State to manage selected post for modal
   const [selectedPost, setSelectedPost] = useState(null);

   // Handler to open modal with the selected post
   const handlePostClick = (post) => {
     setSelectedPost(post);
     // Disable scroll when modal is open
    document.body.classList.add('overflow-hidden');
   };
 
   // Handler to close modal
   const closeModal = () => {
     setSelectedPost(null);
     // Re-enable scroll when modal is closed
    document.body.classList.remove('overflow-hidden');
   };

   // Clean up the 'overflow-hidden' class when component unmounts or modal is closed
  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden'); // Clean up on component unmount
    };
  }, []);
 

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen">
      {/*Blog Page Title*/}
      <h1 className="lg:text-[6rem] md:text-[3rem] text-[2.5rem] text-center tracking-wide">Blog</h1>
      <p className='text-center'>Stay informed, inspired, and connected with our blog</p>

      <BlogSearch posts={posts} />

      {/*Display each BLog card and content*/}
      <ul className="mx-4
       max-w-7xl">
        {posts.map((post) => (
          <li key={post.id}  >
            
            <BlogWrapper isSent={post.id%2==0}> {/*Decides the status of the blog as sent or received*/}
              <div  onClick={() => handlePostClick(post)} className="cursor-pointer">
            <AccountCircleIcon/> <span className='font-bold'>{post.author}</span>

            <h2 className="text-2xl font-semibold text-gray-800 my-2">
              {post.title}
            </h2>
            <p className="text-gray-600 my-2">{post.content}</p>
            <p className='text-gray-400 text-xs font-bold my-2'>{post.date}</p>
            </div>
            </BlogWrapper>
            
          </li>
        ))}
      </ul>

        {/* Modal Popup */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex pt- items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-3/4 h-3/4 overflow-y-scroll  flex flex-col shadow-lg relative">
            {/* Close Button */}
            <button
                className="bg-black p-1 md:p-2 absolute top-2 right-1 rounded-full text-mywhite hover:text-white"
                onClick={closeModal}
              >
                <FaTimes size={10 } />
              </button>

            {/* Modal Content */}
            <h2 className="text-2xl pt-3 font-semibold text-gray-800 mb-4">
              {selectedPost.title}
            </h2>
            <div className='bg-gray-200 p-2 rounded-lg'>
            <p className="text-gray-600 mb-4">{selectedPost.description}</p>
            <p className='text-gray-400 text-xs font-bold'>{selectedPost.author} - {selectedPost.date}</p> 
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}
