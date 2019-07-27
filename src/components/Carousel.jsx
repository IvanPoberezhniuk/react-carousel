import React, { Component } from 'react';
import Slider from './Slider';
import ControlPanel from './ControlPanel';

const imgs = [
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/1.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/2.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/3.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/4.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/5.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/6.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/7.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/8.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/9.png',
  'https://raw.githubusercontent.com/mate-academy/dom_carousel/master/img/10.png'
];

const INPUT_TYPE = {
  STEP: 'STEP',
  FRAME_SIZE: 'FRAME_SIZE',
  ITEM_WIDTH: 'ITEM_WIDTH',
  ANIMATION_DURATION: 'ANIMATION_DURATION'
};

class Carousel extends Component {
  state = {
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    imgCount: imgs.length,
    imgs: imgs,
    range: 0,
    INPUT_TYPE: INPUT_TYPE
  };

  handleInputChange = (event, TYPE) => {
    const value = event.target.value;

    switch (TYPE) {
      case INPUT_TYPE.STEP:
        this.setState({
          step: value
        });
        break;
      case INPUT_TYPE.FRAME_SIZE:
        this.setState({
          frameSize: value
        });
        break;
      case INPUT_TYPE.ITEM_WIDTH:
        this.setState({
          itemWidth: value
        });
        break;
      case INPUT_TYPE.ANIMATION_DURATION:
        this.setState({
          animationDuration: value
        });
        break;
      default:
        return;
    }
  };

  prev = () => {
    this.setState(prevState => {
      const { range, itemWidth, step } = prevState;
      return {
        range: Math.min(range + itemWidth * step, 0)
      };
    });
  };

  next = () =>
    this.setState(prevState => {
      const { range, itemWidth, step, frameSize, imgCount } = prevState;

      return {
        range: Math.max(
          range - itemWidth * step,
          -itemWidth * imgCount + itemWidth * frameSize
        )
      };
    });

  render() {
    const { state, handleInputChange, prev, next } = this;

    return (
      <div className="carousel">
        <ControlPanel state={state} handleInputChange={handleInputChange} />
        <Slider state={state} prev={prev} next={next} />
      </div>
    );
  }
}

export default Carousel;
