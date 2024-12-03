"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { getData } from "../categoryData/Category";
import { useEffect, useState } from "react";
import { BlogDataProps } from "@/types/componentTypes";

const HeroSection = () => {
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

  return (
    <div className="w-full">
      <div className="bg-[url('/images/herobg.jpg')] h-[40rem] bg-cover bg-no-repeat">
        <div className="py-16 px-8 flex flex-col items-center justify-center h-[40rem] bg-gray-400/30">
          <div className="border-y-2 p-8 rounded-lg border-black bg-black/30">
            <h1 className="text-3xl md:text-4xl font-bold text-white ">Welcome to Tasty Teasers</h1>
            <p className="mt-4 text-md md:text-xl font-semibold text-white">
              Explore delicious recipes, cooking hacks, and culinary inspiration for every occasion!
            </p>
            <button className="mt-6 bg-red-800 text-white py-2 px-4 rounded hover:bg-red-900 shadow-lg">
              <Link href="/blogs" className="text-center">
                Explore Recipes
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-center m-8 mt-12 text-2xl md:text-3xl font-semibold underline underline-offset-[12px] text-black">Recent Posts</h4>

        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8">
          {blogData
            .filter((post) => [ 5 ,7, 15, 13, 16, 21, 30, 34,].includes(post.id))
            .map((post) => (
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
    </div>
  );
};

export default HeroSection;