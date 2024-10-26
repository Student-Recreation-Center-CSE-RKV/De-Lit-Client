import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BlogWrapper from './BlogWrapper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaTimes } from 'react-icons/fa';

function BlogDisplay({posts}) {

    // State to manage selected post for modal
   const [selectedPost, setSelectedPost] = useState(null);

   // Handler to open modal with the selected post
   const handlePostClick = (post) => {
     setSelectedPost(post);
     // Disable scroll when modal is open
    document.body.style.overflow= 'hidden'
   };
 
   // Handler to close modal
   const closeModal = () => {
     setSelectedPost(null);
     // Re-enable scroll when modal is closed
    document.body.style.overflow= 'auto'
   };

   // Clean up the 'overflow-hidden' class when component unmounts or modal is closed
  useEffect(() => {
    return () => {
        document.body.style.overflow= 'auto' // Clean up on component unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-mywhite min-h-screen">
      {/*Display each BLog card and content*/}
      <ul className="mx-4 max-w-7xl">
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
  )
}

export default BlogDisplay