// export default function BlogWrapper({ children, isSent }) {
//     return (
//       <div
//         className={`outline-dashed flex ${isSent ? 'justify-end' : 'justify-start'} mb-4`}
//       >
//         <div
//           className={`outline-dotted bg-${isSent ? 'green-200' : 'white'} 
//                       border border-gray-300 
//                       rounded-lg 
//                       shadow-md 
//                       p-3 
                      
//                       relative`}
//         >
//           {children}
//           <div
//             className={`outline-double absolute ${isSent ? 'right-0' : 'left-0'} 
//                         top-2 
//                         w-0 
//                         h-0 
//                         border-t-4 
//                         border-b-4 
//                         border-l-${isSent ? 'transparent' : 'white'} 
//                         border-r-${isSent ? 'white' : 'transparent'} 
//                         border-t-${isSent ? 'green-200' : 'white'}`}
//           ></div>
//         </div>
//       </div>
//     );
//   }
  

export default function BlogWrapper({ children, isSent }) {
    return (
      <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} my-8 `}>
        <div
          className={`relative  p-3 
                      ${isSent ? 'bg-mywhite text-left' : 'bg-colorF text-left'}
                      ${isSent ? 'ml-12' : 'ml-0'}
                      ${isSent ? 'mr-0' : 'mr-12'} 
                      
                      md:w-3/4
                      
                      rounded-xl shadow-md`
                    
                    }
        >
          {children}
  
          {/* Tail for the message bubble */}
          {/* <div
          className={`absolute w-4 h-4 
                      ${isSent ? 'bg-green-200 right-0 -mr-3' : 'bg-gray-100 left-0 -ml-3'} 
                      transform rotate-45 rounded-sm shadow-md`}
          style={{ bottom: '8px' }}
        ></div> */}
        </div>
      </div>
    );
  }
  