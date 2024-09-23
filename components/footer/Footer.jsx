// 
// components/Footer.js
"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for handling the email subscription can go here (e.g., API call)
    console.log(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            {/* <h1 className="text-2xl font-bold text-white">Your Logo</h1> */}
            <img src="/logo.jpg" alt="" className="w-32  mx-auto h-auto"/>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Magazines</a>
            <a href="#" className="hover:text-white">Blogs</a>
            <a href="#" className="hover:text-white">Gallery</a>
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact</a>
            
          </div>
        </div>

        {/* Uploading Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <button
                type="button"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors duration-300 w-full sm:w-auto"
            >
                Upload Your Work
            </button>
            <button
                type="button"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors duration-300 w-full sm:w-auto"
            >
                Write a Blog
            </button>
            <button
                type="button"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors duration-300 w-full sm:w-auto"
            >
                Give Feedback
            </button>
            </div>
            
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Subscribe to our Newsletter</h2>
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

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          
          <a href="#" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.272-.099-.469-.149-.666.149-.198.297-.763.966-.935 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.666-1.611-.915-2.209-.24-.577-.485-.499-.666-.499h-.572c-.198 0-.521.074-.795.372-.272.297-1.04 1.017-1.04 2.479 0 1.461 1.065 2.875 1.213 3.074.149.198 2.1 3.212 5.077 4.506.709.306 1.261.489 1.692.626.711.226 1.357.194 1.868.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M20.52 3.477C18.253 1.209 15.243 0 12 0 5.373 0 0 5.373 0 12c0 2.122.557 4.205 1.617 6.037L0 24l6.064-1.589A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.243-1.209-6.253-3.477-8.523zM12 22.129c-1.835 0-3.651-.491-5.22-1.419l-.375-.224-3.602.943.963-3.509-.244-.364C2.42 15.862 1.872 13.952 1.872 12 1.872 6.601 6.601 1.872 12 1.872c2.536 0 4.921.988 6.707 2.773 1.785 1.786 2.773 4.171 2.773 6.707 0 5.399-4.729 10.257-10.257 10.257z"/>
            </svg>
          </a>

          <a href="#" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.75 20.5h-3v-11h3v11zm-1.5-12.63c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.25 12.63h-3v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66h-3v-11h2.88v1.5h.04c.4-.75 1.39-1.54 2.86-1.54 3.06 0 3.62 2.01 3.62 4.63v6.41z"/>
            </svg>
          </a>

          <a href="#" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.317.975.975 1.256 2.242 1.318 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.265-.058 1.645-.069 4.849-.069m0-2.163c-3.257 0-3.667.013-4.947.072-1.39.064-2.645.343-3.688 1.386-1.043 1.043-1.322 2.297-1.386 3.688-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.064 1.39.343 2.645 1.386 3.688 1.043 1.043 2.297 1.322 3.688 1.386 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.39-.064 2.645-.343 3.688-1.386 1.043-1.043 1.322-2.297 1.386-3.688.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.064-1.39-.343-2.645-1.386-3.688-1.043-1.043-2.297-1.322-3.688-1.386-1.28-.059-1.69-.072-4.947-.072z"/>
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>

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
