import React, { useEffect, useState } from "react";
import moment from "moment";
import { FaThumbsUp } from "react-icons/fa";

const Comment = ({ comment, onLike }) => {
  const [user, setUser] = useState({});
  // console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();

        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  return (
    <div className="flex p-4 border-b dark:border-gray-600">
      <div className="flex-shrink-0 mr-3">
        <img
          src={user.profilePicture}
          alt=""
          className="w-10 h-10 rounded-full bg-gray-200"
        />
      </div>
      <div className="flex-1">
        <div className="">
          <span className="font-bold mr-1 text-xs truncate">
            {user ? `@${user.username}` : "Anonymous user"}
          </span>
          <span className="text-gray-500 text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-gray-500 pb-2">{comment.content}</p>
        <div className="">
          <button
            type="button"
            onClick={() => onLike(comment._id)}
            className="text-gray-400 hover:text-blue-500"
          >
            <FaThumbsUp className="text-md" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
