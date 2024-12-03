"use client";
import { BlogDataProps } from "@/types/componentTypes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export async function getData() {
  const response = await fetch("/api/blogsData");
  const data = await response.json();
  return data;
}

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "BBQ", "Dessert", "Fast Food"];

const Category = () => {
  const [blogData, setBlogData] = useState<BlogDataProps[]>([]);
  const [likedPostId, setLikedPostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const blogs = await getData();
      setBlogData(blogs);
    };

    fetchBlogData();
  }, []);

  const likeHandler = (postId: number) => {
    setLikedPostId((prev) => (prev === postId ? null : postId));
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((item: BlogDataProps) => item.category === selectedCategory);

  return (
    <div className="mx-8">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border rounded-lg ${
              selectedCategory === category
                ? "bg-red-900 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-lg">
            <div className="">
              <Image
                src={post.image}
                alt={post.title}
                height={200}
                width={200}
                className="w-full sm:h-96 object-cover mb-2 rounded"
              />
            </div>
            <h2 className="text-center text-black font-[500]">Title: {post.title}</h2>
            <h2 className="text-center font-semibold text-lg">{post.main.heading}</h2>
            <p className="text-red-500 text-center">{post.date}</p>
            <div className="flex justify-between flex-row gap-0 mt-8">
              <button onClick={() => likeHandler(post.id)}>
                <div
                  className={`border-2 border-red-700 px-2 py-2 rounded-full flex flex-row gap-1 ${
                    likedPostId === post.id
                      ? "bg-red-700 text-white"
                      : "border-red-700 text-red-700 hover:bg-transparent"
                  }`}
                >
                  <FaHeart className=" text-xl" />
                </div>
              </button>
              <Link
                href={`/blogs/blog${post.id}`}
                className="text-red-500 border-2 border-red-500 hover:text-white hover:bg-red-900 hover:border-red-900 p-2 rounded-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;