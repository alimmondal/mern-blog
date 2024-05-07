import { Button, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentSection = ({ postId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  // console.log(comment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }

    const res = await fetch("/api/comment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: comment,
        postId: postId,
        userId: currentUser._id,
      }),
    });
    const data = await res.json();

    if (res.ok) {
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500">
          <p className="">Signed in as:</p>
          <img
            className="h-10  w-10  object-cover rounded-full"
            src={currentUser.profilePicture}
            alt=""
          />
          <Link
            className="text-xs text-cyan-600 hover:underline"
            to={"/dashboard?tab=profile"}
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5">
          You must be logged in to comment.
          <Link className="text-blue-500 hover:underline" to={"/login"}>
            Login
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-teal-500 rounded-md p-3"
        >
          <Textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            rows="3"
            maxLength="200"
            value={comment}
          />
          <div className=" flex justify-between items-center mt-5">
            <p className="text-xs text-gray-500">
              {200 - comment.length} remaining characters
            </p>
            <Button type="submit" outline gradientDuoTone="purpleToBlue">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentSection;
