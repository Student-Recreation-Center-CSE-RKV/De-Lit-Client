"use client";

import { useEffect, useState } from "react";
import ArticleCard from "@/components/publications/article/ArticleCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Articles({ header, subheader, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredArticles = data.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto pb-10 px-5">
      <div className="mb-3 md:mb-8 md:-mt-5">
        <h1 className="text-[2.8rem] md:text-7xl text-center text-myblack tracking-wide">
          {header}
        </h1>
        <p className="hidden md:block text-center mt-4 text-colorA">
          {subheader}
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search articles"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="border border-gray-400 rounded-full p-2 w-full max-w-md focus:outline-none focus:ring-1 focus:ring-colorC transition duration-150"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {currentArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-300 rounded-full"
        >
          <FiChevronLeft className="size-6 text-gray-500" />
        </button>

        <span className="text-gray-500 font-medium">
          {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-300 rounded-full"
        >
          <FiChevronRight className="size-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
