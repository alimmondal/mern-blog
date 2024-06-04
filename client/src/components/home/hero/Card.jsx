/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const Card = ({ item: { urlToImage, source, title, author, publishedAt } }) => {
  return (
    <>
      <div key={source?.id} className="box">
        <div className="img">
          <img src={urlToImage} alt="" />
        </div>
        <div className="text">
          <span className="category">{source?.name}</span>
          {/* <Link to={`/SinglePage/${id}`}> */}
          <h1 className="titleBg">{title}</h1>
          {/* </Link> */}
          <div className="author flex">
            <span>by {author}</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
