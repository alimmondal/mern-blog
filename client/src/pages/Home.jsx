/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/get-posts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="">
      <div className="w-full h-[500px] sm:h-[400px] flex-col-reverse flex sm:flex-row items-center bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 mt-16 p-5 sm:p-28">
        <div
          // style={{
          //   backgroundImage: `url(${car})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className="flex flex-col gap-4 sm:ml-20"
        >
          {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
          <h1 className="text-gray-300 dark:text-white text-3xl font-bold lg:text-6xl ">
            Welcome to my tech Blog
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm">
            Here you&apos;ll find a variety of articles and tutorials on topics
            such as web development, software engineering, and programming
            languages.
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-300 font-bold hover:underline hover:text-white"
          >
            View all posts
          </Link>
        </div>

        <div className="">
          <img src="/js7.png" alt="" className="object-cover" />
        </div>
      </div>

      {/* Call to action */}
      {/* <div className="mt-28 p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}

      {/* All posts */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="">
            <h2 className="text-2xl font-semibold text-center my-4">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className="text-center pt-4">
              <Link
                to={"/search"}
                className="text-center text-lg text-teal-500 hover:underline"
              >
                View all posts
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="my-20 p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
    </div>
  );
}
