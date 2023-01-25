import React, { useState } from 'react';

const ReadMoreAndLess = ({ children }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  console.log(children[0].props.children);
  const toggleShow = () => {
    setIsReadMoreShown((prevState) => !prevState);
  };
  return (
    <div className="read-more-and-less">
      {isReadMoreShown ? children : children[0].props.children.substr(0, 200)}
      <br />
      <button type="text" className="readMoreBtn" onClick={toggleShow}>
        Read
        {isReadMoreShown ? ' less' : ' more'}
      </button>
    </div>
  );
};

export default ReadMoreAndLess;
