"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getData } from '@/app/components/categoryData/Category';
import { BlogDataProps } from '@/types/componentTypes';
import Link from 'next/link';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { Comment } from '@/types/componentTypes';
import Image from 'next/image';

const BlogDetails = () => {
    const params = useParams();
    const id = params.blog;
    const blogId = id;

  const [details, setDetails] = useState<BlogDataProps | null>(null);
  console.log("Id", id);
  console.log("Parsed postId", blogId);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const blogData = await getData(); 
      const blogDetails = blogData.find(
        (item: BlogDataProps) => String(item.id) === String(blogId)
      );
      setDetails(blogDetails);
      console.log("Blog Data", blogData);
      console.log("Blog Details", blogDetails);

    };

    fetchBlogDetails();
  }, [blogId]);

  

  // Comments State
  const [comments, setComments] = useState<Comment[]>([
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState('');

  // Add a new comment
  const handleAddComment = () => {
    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      likes: 0,
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  // Handle like for a comment
  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="container mx-auto p-4 text-black">
      {details ? (
        <div className="mt-4 list-none">
          <h2 className="text-3xl font-bold">Blog Title: {details.title}</h2>
          <p className="mt-2 text-2xl font-semibold">Date: {details.date}</p>
          <h1 className="mt-4">{details.main.heading}</h1>
          <Image 
          src={details.image}
          alt={details.title}
          width={200}
          height={200}
          className='bg-cover w-full'
          />
          <p className="mt-2 text-2xl font-semibold">{details.main.para}</p>
          <h2 className="text-3xl font-bold">{details.sub.heading}</h2>
          <p className="mt-2 text-2xl font-semibold">{details.sub.para}</p>
          <p className="mt-2 text-2xl font-semibold">{details.description.heading}</p>
          <ol>
            {details.description.para.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
          <h5 className="text-3xl font-bold">
            Ingredients Required (Serves approximately 4-5 people):
          </h5>
          <ul>
            {details.ingredients.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h5 className="text-3xl font-bold">Step-by-Step Recipe:</h5>
          <ol>
            {details.cookingProcess.map((point, index) => (
              <div key={index}>
                <li>{point.heading}</li>
                <ul>
                  <li>{point.para}</li>
                </ul>
              </div>
            ))}
          </ol>
          <h5 className="text-3xl font-bold">{details.conclusion.heading}</h5>
          <p className="mt-2 text-2xl font-semibold">{details.conclusion.para}</p>
          <button>
            <Link href="/blogs">Back</Link>
          </button>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        <button>
            <Link href="/blogs">Back</Link>
          </button>
        </div>
      )}
  
      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Leave a reply</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mt-4">
              <div className="flex justify-between">
                <p>{comment.text}</p>
                <div className="flex gap-2">
                  <button
                    className="text-black hover:text-[#ff1515] text-2xl"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <FaHeartCirclePlus />
                  </button>
                  <p className="text-lg text-[#ff1515]">({comment.likes})</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
  
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
            className="ml-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-700"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;