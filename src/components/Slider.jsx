import React from 'react';

const Slider = props => {
  const {
    step,
    frameSize,
    itemWidth,
    animationDuration,
    isInfinite,
    imgCount,
    imgs,
    range
  } = props.state;

  const { prev, next } = props;

  const calcFrameSize = () => itemWidth * frameSize + 'px';

  return (
    <section className="carousel__slider-wrapper">
      <button
        type="button"
        className="carousel__prev carousel__buttons"
        onClick={prev}
      >
        ⇦
      </button>
      <section
        className="carousel__slider"
        style={{
          width: calcFrameSize(),
          transitionDuration: `${animationDuration}ms`
        }}
      >
        <div className="carousel__slides-wrapper" style={{ left: range }}>
          {imgs.map((img, index) => (
            <img
              src={img}
              alt={index}
              key={index}
              className="carousel__image"
              style={{ width: itemWidth + 'px' }}
            />
          ))}
        </div>
      </section>
      <button
        type="button"
        className="carousel__next carousel__buttons"
        onClick={next}
      >
        ⇨
      </button>
    </section>
  );
};

export default Slider;
