import React from 'react';

const Next = ({ next }) => {
  return (
    <button
      type="button"
      className="carousel__next carousel__buttons"
      onClick={next}
    >
      ⇨
    </button>
  );
};

export default Next;
