/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({
  item: { id, image, title, author, createdAt, category, slug },
}) => {
  // console.log(image);
  return (
    <>
      <div key={id} className="box">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <span className="category">{category}</span>
          <Link to={`/post/${slug}`}>
            <h1 className="titleBg font-bold">{title}</h1>
          </Link>
          <div className="author flex">
            <span>by {author || "alim"}</span>
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
