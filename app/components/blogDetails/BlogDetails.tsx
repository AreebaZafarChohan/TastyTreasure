"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { BlogDataProps } from "@/types/componentTypes";
import Link from "next/link";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Comment } from "@/types/componentTypes";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const BlogDetails = () => {
  const params = useParams();
  const id = params.blog;
  const blogId = id.slice(4);

  const [details, setDetails] = useState<BlogDataProps | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogData = await client.fetch(
  `*[_type == "blogs"]{
  id,
  "category":category->category,
  image,
  title,
  date,
  main_paragraph {
    heading,
    paragraph
  },
  sub_sec_paragraph {
    sub_heading,
    sub_paragraph
  },
  description {
    desc_heading,
    desc_paragraph[]
  },
  ingredients[],
  cooking_process[] {
    cooking_process_heading,
    cooking_process_paragraph
  },
  conclusion {
    conclusion_heading,
    conclusion_paragraph
  }
}`
        );

        const blogDetails = blogData.find(
          (item: BlogDataProps) => String(item.id) === String(blogId)
        );
        setDetails(blogDetails);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  // Comments State
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: "This Is Such A Great Recipe!", likes: 0 },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState("");

  // Add a new comment
  const handleAddComment = () => {
    const newCommentObj = {
      id: comments.length + 1,
      text: newComment
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()), // Converts to title case
      likes: 0,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  // Handle like for a comment
  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
  };

  // Recipe Rating State
  const [rating, setRating] = useState(0);

  return (
    <div className="sm:m-16 p-4 text-black">
      {details ? (
        <div className="mt-4 list-none">
          <div className="flex md:flex-row flex-col justify-around items-center">
            <div className="md:w-[50%]">
              <h2 className="px-2 text-sm">Blog Title: {details.title}</h2>
              <p className="px-2 mt-2 text-sm">Date: {details.date}</p>
              <h1 className="mt-6 p-2 font-bold text-2xl sm:text-4xl">
                {details.main_paragraph.heading}
              </h1>
              <p className="mt-4 p-2 sm:text-lg ">{details.main_paragraph.paragraph}</p>
            </div>
            <div className="md:w-[50%] border-y-2 border-red-950 rounded-lg flex justify-center">
             <Image src={urlFor(details.image).url()} alt={details.title} width={200} height={200} 
                className="w-full h-full sm:h-96 sm:w-96 m-8 rounded-lg "
              />
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl p-4 pt-14 text-red-950 font-bold">
            {details.sub_sec_paragraph.sub_heading}
          </h2>
          <p className="p-2 sm:text-lg">{details.sub_sec_paragraph.sub_paragraph}</p>
          <p className="mt-8 p-2 text-lg sm:text-2xl font-semibold">
            {details.description.desc_heading}
          </p>
          <ol className="list-decimal p-4 ">
            {details.description.desc_paragraph.map((point, index) => (
              <li
                key={index}
                className="p-2 sm:px-4 sm:text-lg border-l-2 border-red-700"
              >
                {point}
              </li>
            ))}
          </ol>
          <div className="">
            <h5 className="text-lg sm:text-2xl mt-6 p-4 font-bold">
              Ingredients Required (Serves approximately 4-5 people):
            </h5>
            <ul className="list-disc px-8">
              {details.ingredients.map((point, index) => (
                <li key={index} className="p-2 sm:px-4 sm:text-lg ">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-10 sm:mx-2 px-8">
            <h5 className="text-lg sm:text-2xl py-4 p-2 sm:p-2 font-bold">
              Step-by-Step Recipe:
            </h5>
            <ol className="list-decimal sm:px-4">
              {details.cooking_process.map((point, index) => (
                <div key={index}>
                  <li className="sm:p-2 sm:px-4 text-sm sm:text-lg ">
                    {" "}
                    {point.cooking_process_heading}
                  </li>
                  <ul className="p-2 list-disc">
                    <li className="p-2 text-sm sm:text-lg"> {point.cooking_process_paragraph}</li>
                  </ul>
                </div>
              ))}
            </ol>
          </div>
          <h5 className="text-lg sm:text-xl font-semibold p-4 ">
            {" "}
            {details.conclusion.conclusion_heading}
          </h5>
          <p className="mt-2 sm:text-lg px-4">{details.conclusion.conclusion_paragraph}</p>
          <p className="m-4 p-2">Thanks for reading.....</p>
          <p className="mt-12 text-center sm:text-2xl ">◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇</p>
          <button className="m-12 p-2 leading-5 px-8 rounded shadow-md bg-transparent shadow-red-950 border-2 border-red-900 sm:text-lg hover:bg-red-900 hover:text-white">
            <Link href="/blogs">Back</Link>
          </button>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
          <button className="my-6 p-2 leading-5 px-8 rounded shadow-md bg-transparent shadow-red-950 border-2 border-red-900 sm:text-lg hover:bg-red-900 hover:text-white">
            <Link href="/blogs">Back</Link>
          </button>
        </div>
      )}
      <hr className="h-2 " />
      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-2xl font-semibold text-black uppercase">
          Leave a reply <hr className="h-[0.2rem] bg-black w-52 mt-1" />
        </h2>
        <p className="sm:text-lg my-4">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Recipe Rating */}
        <div className="mt-4">
          <h2 className="sm:text-lg">Recipe Rating:</h2>
          <div className="flex gap-2 my-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-lg sm:text-xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(star)}
              >
                <FaStar />
              </button>
            ))}
          </div>
          <p className="mt-2">Your Rating: {rating} / 5</p>
        </div>
        <h6 className="mt-8 underline text-red-900">Comment*</h6>
        {/* Add New Comment */}
        <div className="mt-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="border p-2 rounded"
          />
          <button
            className="my-4 sm:ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-950"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
        <ul className="list-disc p-4">
          {comments.map((comment) => (
            <li key={comment.id} className="mt-2">
              <div className="flex justify-between">
                <p className="text-sm sm:text-base">{comment.text}</p>
                <div className="flex gap-2">
                  <button
                    className="text-black hover:text-[#ff1515] text-lg sm:text-2xl"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <FaHeartCirclePlus />
                  </button>
                  <p className="sm:text-lg text-[#ff1515]">({comment.likes})</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
