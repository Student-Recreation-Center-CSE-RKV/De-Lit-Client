//
// components/Footer.js
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for handling the email subscription can go here (e.g., API call)
    console.log(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer id="footer" className="bg-myblack min-h-screen flex items-center text-gray-300 py-0">
      <div className="container mx-auto   px-4 py-0">
        <div className=" flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <div className=" mb-6 lg:mb-0 flex-grow">
            {/* <h1 className="text-2xl font-bold text-white">Your Logo</h1> */}
            {/* <img src="/footer_logo.jpg" alt="" className="w-32  mx-auto h-auto"/> */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className="w-64  mx-auto h-auto" viewBox="0 0 504.000000 495.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,495.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
            <path d="M4400 3483 c-201 -20 -561 -97 -1135 -240 -77 -20 -165 -41 -196 -48 -61 -13 -79 -21 -79 -36 0 -19 74 -8 292 45 300 72 406 96 417 96 5 0 12 -12 15 -27 17 -81 37 -547 43 -991 6 -503 6 -503 27 -500 19 3 21 11 27 118 18 323 2 1091 -26 1304 -7 56 -10 105 -5 109 21 23 441 105 680 133 107 13 150 22 150 31 0 10 -22 13 -87 11 -49 0 -104 -3 -123 -5z"/>
            <path d="M1598 3364 c-380 -69 -776 -339 -917 -626 -60 -121 -70 -206 -30 -254 12 -15 69 -20 69 -6 0 5 -9 17 -20 27 -30 27 -27 111 6 178 110 216 325 405 619 543 144 67 226 91 361 106 237 27 393 -40 497 -215 20 -32 41 -80 47 -107 l12 -49 -46 -65 c-59 -82 -139 -251 -206 -436 -107 -295 -213 -479 -287 -499 -21 -6 -45 -11 -52 -11 -8 0 -53 -12 -99 -26 -46 -14 -86 -23 -89 -20 -5 5 11 186 38 446 5 52 13 160 16 240 7 164 -3 220 -39 220 -19 0 -20 -4 -14 -77 6 -71 -2 -208 -44 -708 -6 -71 -13 -135 -14 -141 -2 -6 -55 -36 -118 -67 -139 -68 -188 -107 -188 -148 0 -22 5 -30 26 -35 36 -9 121 1 190 23 44 13 58 15 62 5 6 -20 32 -14 43 11 6 14 52 44 132 84 68 34 164 92 215 128 l93 66 67 -10 c37 -6 114 -25 172 -42 318 -93 443 -92 677 7 170 72 278 148 357 251 l40 52 13 -30 c6 -16 17 -29 23 -29 21 0 29 50 22 151 -7 102 -7 104 -32 104 -24 0 -25 -3 -30 -70 -5 -58 -13 -82 -43 -131 -66 -110 -171 -198 -321 -270 -224 -108 -364 -111 -696 -16 -58 17 -127 33 -155 37 -27 4 -54 10 -58 12 -4 3 32 47 81 98 167 174 264 352 316 577 22 95 29 213 17 288 l-10 65 44 40 c96 88 295 185 378 185 34 0 94 -32 103 -54 3 -7 -11 -42 -30 -78 -38 -68 -46 -115 -22 -124 45 -17 98 67 95 151 -2 32 3 60 11 69 14 18 0 22 -17 5 -8 -8 -17 -6 -34 10 -76 71 -301 7 -477 -137 -30 -24 -55 -42 -56 -40 -1 2 -12 30 -25 63 -45 114 -125 198 -234 244 -114 49 -287 63 -439 35z m652 -542 c0 -158 -45 -331 -121 -468 -34 -61 -117 -184 -125 -184 -2 0 3 17 11 38 20 46 51 162 60 222 16 107 42 220 72 310 18 55 84 180 95 180 4 0 8 -44 8 -98z m-610 -952 c-55 -49 -157 -110 -185 -110 -16 0 -19 28 -9 68 5 18 26 28 113 56 58 19 113 35 121 35 8 0 -10 -22 -40 -49z m-255 -97 c-4 -27 -12 -51 -18 -55 -16 -10 -73 -27 -119 -34 -33 -6 -38 -4 -38 13 0 35 117 123 164 123 16 0 17 -5 11 -47z m-192 -68 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9 16 15 13 8 -4z"/>
            <path d="M3203 2543 c-18 -7 -16 -53 2 -53 12 0 35 28 35 43 0 8 -24 14 -37 10z"/>
            <path d="M2165 1140 c-11 -4 -31 -20 -45 -35 -20 -22 -25 -37 -25 -82 0 -49 3 -58 32 -84 52 -45 102 -50 148 -14 18 15 17 15 -12 0 -18 -8 -43 -15 -56 -15 -61 0 -110 85 -88 153 15 45 42 68 89 77 33 7 34 8 7 8 -16 1 -39 -3 -50 -8z"/>
            <path d="M2330 1025 l0 -125 85 0 c47 0 85 4 85 8 0 5 -33 8 -72 8 l-73 -1 0 118 c0 87 -3 117 -12 117 -10 0 -13 -32 -13 -125z"/>
            <path d="M2528 1058 c1 -51 4 -102 7 -114 10 -44 109 -60 145 -24 17 17 20 33 20 109 0 49 3 96 6 105 3 9 1 16 -5 16 -7 0 -11 -34 -11 -103 0 -119 -10 -137 -73 -137 -55 0 -67 25 -67 142 0 72 -3 98 -12 98 -10 0 -12 -24 -10 -92z"/>
            <path d="M2745 1024 l0 -126 75 4 c41 3 85 11 98 19 43 27 41 101 -4 121 -21 10 -24 16 -19 40 4 17 2 35 -5 43 -19 23 -31 17 -18 -9 14 -32 4 -56 -22 -56 -12 0 -34 -7 -50 -15 l-30 -16 0 55 c0 52 1 55 28 59 20 3 17 4 -13 6 l-40 1 0 -126z m146 15 c24 -12 42 -55 34 -80 -9 -28 -57 -49 -110 -49 l-45 0 0 55 c0 49 3 56 28 69 32 18 66 20 93 5z"/>
            <path d="M2265 1120 c10 -11 22 -17 28 -13 6 4 3 12 -8 20 -28 20 -41 16 -20 -7z"/>
            </g>    
            </svg>
          </div>

          {/* Uploading Buttons */}
          <div className="flex flex-col flex-grow justify-center items-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Contribute
          </h2>
            <div className="flex flex-col space-y-4  text-center">
              <Link href={"/submissionForm"}
                
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
              >
                Upload Your Work
              </Link>
            
              <button
                type="button"
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
              >
                Give Feedback
              </button>
            </div>
          </div>

          {/* Newsletter Subscription */}
        <div className="flex flex-col flex-grow items-center justify-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-white mb-7 max-w-96 text-center">Stay Updated with the latest events, publications and oppurtunites from De-Lit!!!</p>
          <form onSubmit={handleSubscribe} className="w-full max-w-md">
            <div className="flex flex-row justify-center items-center p-2 focus-within:ring-2 rounded-full focus-within:ring-blue-500 bg-white">
              <input
                type="email"
                className="w-full px-4 py-2 text-gray-900 rounded-full focus:outline-none flex-grow-[2] border-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-myblack px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-black hover:to-colorB hover:transition-all duration-500 text-sm tracking-widest"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
        </div>

         <div className="flex flex-col  justify-center items-center mb-8 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <FaWhatsapp size={50}/>
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <FaInstagram size={50} />
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <FaLinkedin size={50} />
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <FaRegEnvelope size={50} />
          </a>
        </div>
          </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} De-Lit.club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
