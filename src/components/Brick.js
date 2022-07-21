import React, {useState} from "react";

const Brick = (props) => {
  const {id, className, imageTitle, imageUrl } = props;

  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div id={id} className={className} onMouseEnter={()=>{setMouseIn(true)}}>
      <img src={imageUrl} alt={imageTitle} />
      <button sytle={{display: mouseIn? 'block': "none"}}>delete</button>
      <p sytle={{display: mouseIn? 'block': "none"}} >{imageTitle}</p>
    </div>
  );
};

export default Brick;
