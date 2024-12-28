

"use client";
import { useState } from 'react';
import BlogSearch from './BlogSearch';

export default function Blog() {
  const [posts] = useState([
    {
      id: 1,
      author: 'Aaqhil Ahamed',
      title: '12:12',
      date: 'Oct 30,2024',
      content: `So ends another semester with another batch. <br />Although there weren't as many people as expected, it was a wholesome experience. Another therapy session {laughing_with_eyes_closed}. Since we had informed them that this was to be the last session of the semester, they were waiting with expectant eyes. We had a guest from R20 batch who readily became a part of the activity the coordinators from R21 had planned.<br /><br />The activity for the day was to write a letter to their past and future selves. Every narrative resonated the hurdles they faced, experiences that molded them, and the pleasures they had, and advising their future versions to love themselves and to be strong whatever may come. Everyone had a deeper and emotional story to tell. People bared their strongest concerns coming out of their so-called **Shell of Scrutiny** they'd confined themselves to. <br /><br />It was a period (.) to the first chapter of R22 as members and R21 as coordinators.<br /><br />*"Not even a second goes by throughout the week without the thought of the next session."<br />"My dawgs inquire me about the session I come from everytime."<br />"I float in excitement on my way to the club."<br />"I've come to know and interact with seniors who helped me through different walks of life."<br /> "har baar club mein dil garden garden ho jaata hai"*<br />These pearls were annotated by the newest members of our *coterie*. `

    },
    { id: 2, 
      author:'William Shakespeare', 
      date:'Sep 14,1601', 
      title: 'Love all, truest a few, do wrong to none.', 
      content: `**The club De-Lit** hath this day planted its seed in the soil of a world beset. Verily, *'tis a noble beginning* for a newly forged, <u>enthusiastic band</u>. It doth spill forth its fervor, to spread its roots wide, reaching to all corners of the earth. <br /><br />As a <sup>3</sup>humble<sub>2</sub> poet and scribe, I do foresee this club to flourish and become a most glorious company, extending its majesty to the very dawn of creation.`
    },
    { id: 3, 
      author:'Person 2', 
      date:'Oct 10,2024', 
      title: 'Second Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 4, 
      author:'Person 3', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 5, 
      author:'Person 4', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 6, 
      author:'Person 5', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 7, 
      author:'Person 6', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 8, 
      author:'Person 7', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 9, 
      author:'Person 8', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 10, 
      author:'Person 9', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 11, 
      author:'Person 10', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 12, 
      author:'Person 11', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 13, 
      author:'Person 12', 
      date:'Oct 10,2024', 
      title: 'Third Blog Post', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    { id: 14, 
      author:'Person 13', 
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
