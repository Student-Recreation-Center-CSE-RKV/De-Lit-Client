import React from 'react'
import { useState, useEffect } from 'react';
import BlogWrapper from './BlogWrapper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BlogPopup from './BlogPopup';

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
        {posts.map((post,index) => (
          <li key={post.id}  >
            
            <BlogWrapper handlePostClick={handlePostClick} post={post} isSent={index%2==0}> {/*Decides the status of the blog as sent or received*/}
              <div>
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
      <BlogPopup selectedPost={selectedPost} closeModal={closeModal}/>
    </div>
  )
}

export default BlogDisplay
