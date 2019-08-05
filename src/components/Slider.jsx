import React from 'react';
import Prev from './Prev';
import Next from './Next';
const randomstring = require('randomstring');

const Slider = props => {
  const { frameSize, itemWidth, animationDuration, imgs, range } = props.state;

  const { prev, next } = props;

  const calcFrameSize = () => itemWidth * frameSize + 'px';

  return (
    <section className="carousel__slider-wrapper">
      <Prev prev={prev} />
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
              key={randomstring.generate(3)}
              className="carousel__image"
              style={{ width: itemWidth + 'px' }}
            />
          ))}
        </div>
      </section>
      <Next next={next} />
    </section>
  );
};

export default Slider;
