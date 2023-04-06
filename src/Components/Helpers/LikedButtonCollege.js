import React from 'react';

const LikedButtonCollege = ({ college, onLike, isLiked }) => {
  const handleClick = () => {
    onLike(college);
  };

  return (
    <button onClick={handleClick} style={{ /* Add your desired button styles here */ }}>
      {isLiked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikedButtonCollege;
