/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import Hero from "../components/home/hero/Hero";
import Homes from "../components/home/mainContent/homes/Home";
import Discover from "../components/home/discover/Discover";

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
  console.log(posts);

  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const apiKey = "8f32b7d45db04cc2bab08310586753dd";

    fetch(`https://newsapi.org/v2/top-headlines?country=US&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setTopNews(data))
      .catch((error) => console.error("Error fetching top headlines:", error));
  }, []);

  const randomArticles = topNews?.articles;

  const removeDuplicates = () => {
    if (!randomArticles) return [];
    return randomArticles.filter(
      (article) => article?.source.id !== null && article?.urlToImage !== null
    );
  };

  const filteredArticles = removeDuplicates();
  // console.log(filteredArticles);

  return (
    <div className="h-full overflow-hidden mt-16">
      <Hero items={posts} />
      <Homes />
      <Discover />
    </div>
  );
}

// {
/* <div className="">
  <div className="w-full h-[500px] sm:h-[400px] flex-col-reverse flex sm:flex-row items-center bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 mt-16 p-5 sm:p-28">
    <div
      className="flex flex-col gap-4 sm:ml-20"
    >
      <h1 className="text-gray-300 dark:text-white text-3xl font-bold lg:text-6xl ">
        Welcome to my tech Blog
      </h1>
      <p className="text-gray-300 text-xs sm:text-sm">
        Here you&apos;ll find a variety of articles and tutorials on topics such
        as web development, software engineering, and programming languages.
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
</div>; */
// }
