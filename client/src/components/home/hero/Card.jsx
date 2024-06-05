/* eslint-disable react/prop-types */

// import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Card = ({
  item: { id, image, title, author, updatedAt, category, slug },
}) => {
  // console.log(image);
  return (
    <>
      <div key={id} className="box">
        <div className="img">
          <img src={image} alt="" className="" />
        </div>
        <div className="text">
          <span className="category">{category}</span>
          <Link to={`/post/${slug}`}>
            <h1 className="titleBg font-bold">{title}</h1>
          </Link>
          <div className="author flex">
            <span>by {author || "alim"}</span>
            <span>{new Date(updatedAt).toLocaleDateString()}</span>
          </div>
          <Link to={"/search"}>
            <p className="bg-green-500 max-w-fit px-4 mt-2 py-2 hover:bg-orange-500 hover:text-black rounded-full hover:rounded-none !rounded-tl-none !rounded-br-none hover:!rounded-br-full hover:!rounded-tl-full duration-500">
              View all posts
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
