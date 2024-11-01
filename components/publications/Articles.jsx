"use client";

import { useEffect, useState } from "react";
import ArticleCard from "@/components/publications/ArticleCard";
import { ARTICLES } from "@/utils/dummy";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArticleCardSkeleton from "./skeletons/ArticleSkeleton";

export default function Articles({ header, subheader }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // loading state for skeleton
  const articlesPerPage = 9;

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000); // simulate loading time
  }, []);

  const filteredArticles = ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto pb-10 px-5">
      <div className="mb-5">
        <h1 className="text-[2.8rem] md:text-5xl text-center font-bold text-myblack tracking-wide">
          {header}
        </h1>
        <p className="text-center mt-2 text-gray-500">{subheader}</p>
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search articles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 rounded-full p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {loading
          ? Array.from({ length: articlesPerPage }).map((_, index) => (
              <ArticleCardSkeleton key={index} />
            ))
          : currentArticles.map((article, index) => (
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
