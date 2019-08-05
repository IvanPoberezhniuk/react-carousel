import React from 'react';

const Prev = ({ prev }) => {
  return (
    <button
      type="button"
      className="carousel__prev carousel__buttons"
      onClick={prev}
    >
      ⇦
    </button>
  );
};

export default Prev;
