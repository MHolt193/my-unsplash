import React, { useState } from "react";

const Brick = (props) => {
  const { id, className, imageTitle, imageUrl } = props;
  const [showDelete, setShowDelete] = useState(false);

 

  return (
    <div
      id={id}
      className={className}

      onMouseLeave={() => {
        setShowDelete(false);
      }}
      onMouseEnter={() => {
        setShowDelete(true);
      }}
    >
      <img src={imageUrl} alt={imageTitle} />
      {showDelete && <button>delete</button>}
      {showDelete && <p>{imageTitle}</p>}
    </div>
  );
};

export default Brick;
