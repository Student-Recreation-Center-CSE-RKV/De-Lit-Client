//
// components/Footer.js
"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for handling the email subscription can go here (e.g., API call)
    console.log(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-0">
      <div className="container mx-auto px-4 py-0">
        <div className=" flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <div className=" mb-6 lg:mb-0">
            {/* <h1 className="text-2xl font-bold text-white">Your Logo</h1> */}
            {/* <img src="/footer_logo.jpg" alt="" className="w-32  mx-auto h-auto"/> */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className="w-32  mx-auto h-auto" viewBox="0 0 504.000000 495.000000" preserveAspectRatio="xMidYMid meet">

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
          <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Contribute
          </h2>
            <div className="flex flex-col space-y-4  text-center">
              <button
                type="button"
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
              >
                Upload Your Work
              </button>
            
              <button
                type="button"
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
              >
                Give Feedback
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col  justify-center items-center mb-8 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Follow Us On
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.272-.099-.469-.149-.666.149-.198.297-.763.966-.935 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.666-1.611-.915-2.209-.24-.577-.485-.499-.666-.499h-.572c-.198 0-.521.074-.795.372-.272.297-1.04 1.017-1.04 2.479 0 1.461 1.065 2.875 1.213 3.074.149.198 2.1 3.212 5.077 4.506.709.306 1.261.489 1.692.626.711.226 1.357.194 1.868.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M20.52 3.477C18.253 1.209 15.243 0 12 0 5.373 0 0 5.373 0 12c0 2.122.557 4.205 1.617 6.037L0 24l6.064-1.589A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.243-1.209-6.253-3.477-8.523zM12 22.129c-1.835 0-3.651-.491-5.22-1.419l-.375-.224-3.602.943.963-3.509-.244-.364C2.42 15.862 1.872 13.952 1.872 12 1.872 6.601 6.601 1.872 12 1.872c2.536 0 4.921.988 6.707 2.773 1.785 1.786 2.773 4.171 2.773 6.707 0 5.399-4.729 10.257-10.257 10.257z" />
            </svg>
          </a>

          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.75 20.5h-3v-11h3v11zm-1.5-12.63c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.25 12.63h-3v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66h-3v-11h2.88v1.5h.04c.4-.75 1.39-1.54 2.86-1.54 3.06 0 3.62 2.01 3.62 4.63v6.41z" />
            </svg>
          </a>

          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.317.975.975 1.256 2.242 1.318 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.265-.058 1.645-.069 4.849-.069m0-2.163c-3.257 0-3.667.013-4.947.072-1.39.064-2.645.343-3.688 1.386-1.043 1.043-1.322 2.297-1.386 3.688-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.064 1.39.343 2.645 1.386 3.688 1.043 1.043 2.297 1.322 3.688 1.386 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.39-.064 2.645-.343 3.688-1.386 1.043-1.043 1.322-2.297 1.386-3.688.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.064-1.39-.343-2.645-1.386-3.688-1.043-1.043-2.297-1.322-3.688-1.386-1.28-.059-1.69-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          </a>
        </div>
        <h2 className="text-xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-125">
          <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3H4C2.9 3 2 3.9 2 5v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v.51l-8 5-8-5V5h16zM4 19v-9.99l7.5 4.68c.31.2.69.2 1 0L20 9.01V19H4z" />
          </svg>
          </a>
          
        </div>
          </div>

          {/* Newsletter Subscription */}
        <div className="flex flex-col items-start justify-start mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Subscribe to our Newsletter
          </h2>
          <form onSubmit={handleSubscribe} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                className="w-full px-4 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        

          {/* Navigation Links */}
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Magazines
            </a>
            <a href="#" className="hover:text-white">
              Blogs
            </a>
            <a href="#" className="hover:text-white">
              Gallery
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div> */}
        </div>

        

        

        

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} De-Lit.club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
