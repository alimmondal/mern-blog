/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Side from "../home/sideContent/side/Side";
import "../home/mainContent/homes/style.css";
import "./singlepage.css";
import "../home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";
import { FaEnvelope, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { hero } from "../../../dummyData";
import author from "../../../public/images/discover/author.jpg";
import CallToAction from "../CallToAction";
import CommentSection from "../CommentSection";
import PostCard from "../PostCard";
import { Spinner } from "flowbite-react";

const SinglePage = () => {
  // const { id } = useParams();
  const [item, setItem] = useState(null);

  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/get-posts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/get-posts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  // useEffect(() => {
  //   const item = hero.find((item) => item.id === parseInt(id));
  //   window.scrollTo(0, 0);
  //   if (item) {
  //     setItem(item);
  //   }
  // }, [id]);

  return (
    <>
      {post ? (
        <main>
          <SinglePageSlider />
          <div className="container">
            <section className="mainContent details">
              <h1 className="title">{post?.title}</h1>

              <div className="author">
                <span>by</span>
                <img src={post?.authorImg || author} alt="" />
                <p> {post?.authorName || "alim"} on</p>
                <label>{new Date(post?.createdAt).toLocaleDateString()}</label>
              </div>

              <div className="social">
                <div className="socBox">
                  <FaFacebook size={24} />
                  <span>SHARE</span>
                </div>
                <div className="socBox  ">
                  <FaTwitter size={24} />
                  <span>TWITTER</span>
                </div>
                <div className="socBox">
                  <FaPinterest size={24} />
                </div>
                <div className="socBox">
                  <FaEnvelope size={24} />
                </div>
              </div>

              <div className="desctop">
                <span className="italic">
                  {post && (post.content.length / 1000).toFixed(0)} mins read
                </span>
              </div>

              <img src={post?.image} alt="" />
              <div
                className="w-full post-content"
                dangerouslySetInnerHTML={{ __html: post && post.content }}
              ></div>

              <div className="max-w-4xl mx-auto w-full">
                <CallToAction />
              </div>
              <CommentSection postId={post._id} />
            </section>
            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-2 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
