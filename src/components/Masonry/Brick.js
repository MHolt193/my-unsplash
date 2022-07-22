import React, { useState } from "react";

const Brick = (props) => {
  const { id, className, imageTitle, imageUrl } = props;
  const [showDelete, setShowDelete] = useState(false);

  const clickHandler = () => {
    setShowDelete(true);
  };

  return (
    <div
      id={id}
      className={className}
      onClick={clickHandler}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
    >
      <img src={imageUrl} alt={imageTitle} />
      {showDelete && <button>delete</button>}
      {showDelete && <p>{imageTitle}</p>}
    </div>
  );
};

export default Brick;
