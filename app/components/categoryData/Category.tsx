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

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "BBQ", "Desserts", "Fast Food"];

const Category = () => {

    const [blogData, setBlogData] = useState<BlogDataProps[]>([]);

useEffect(() => {
  const fetchBlogData = async () => {
    const blogs = await getData();
    setBlogData(blogs);
  };

  fetchBlogData();
}, []);


    const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter food items based on selected category
  const filteredItems = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(
        (item : BlogDataProps)=> item.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} className={`px-4 py-2 border rounded-lg ${selectedCategory === category ? 'bg-red-900 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8">
        {filteredItems.map((post) => (
          <div key={post.id} className=" border p-4 rounded shadow-lg">
           <div className="">
           <Image
              src={post.image}
              alt={post.title}
              height={200}
              width={200}
              className="w-full object-cover mb-2 rounded"
            />
           </div>
            <h2 className="text-center text-black font-[500]">Title: {post.title}</h2>
            <h2 className="text-center font-semibold text-lg">{post.main.heading}</h2>
            <p className="text-orange-700 text-center">{post.date}
            </p>
            <div className="flex justify-between flex-col sm:flex-row gap-2 lg:gap-0 sm:gap-0 lg:flex-row md:flex-col mt-8 md:gap-2">
              <div className=" border-2 border-transparent bg-red-700 hover:border-red-700 text-white hover:text-red-700 hover:bg-transparent px-2 py-1 rounded-full flex flex-row gap-1">
                <FaHeart className=" pt-2 text-2xl" />
              </div>
              <Link
                href={`/blogs/blog${post.id}`}
                className="text-orange-500 border-2 border-orange-500 hover:text-white hover:bg-orange-700 hover:border-orange-700 p-2 rounded-lg"
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