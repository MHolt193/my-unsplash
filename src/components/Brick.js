import React from "react";

const Brick = (props) => {
  const {id, className, imageTitle, imageUrl } = props;



  return (
    <div id={id} className={className} >
      <img src={imageUrl} alt={imageTitle} />
      <button >delete</button>
      <p>{imageTitle}</p>
    </div>
  );
};

export default Brick;
