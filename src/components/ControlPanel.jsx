import React from 'react';

const ControlPanel = props => {
  const {
    step,
    frameSize,
    itemWidth,
    animationDuration,
    isInfinite,
    imgCount,
    INPUT_TYPE
  } = props.state;

  const { handleInputChange } = props;

  return (
    <section className="carousel__control-panel">
      <h1>ControlPanel</h1>
      <label htmlFor="itemWidth">{`ItemWidth: ${itemWidth}px`} </label>
      <input
        type="range"
        min="130"
        max="600"
        name="itemWidth"
        value={itemWidth}
        onChange={event => handleInputChange(event, INPUT_TYPE.ITEM_WIDTH)}
      />
      <label htmlFor="frameSize">{`FrameSize: ${frameSize} `} </label>
      <input
        type="range"
        name="frameSize"
        min="1"
        max={imgCount}
        step="1"
        value={frameSize}
        onChange={event => handleInputChange(event, INPUT_TYPE.FRAME_SIZE)}
      />
      <label htmlFor="animationDuration">{`Duration: ${animationDuration}ms`}</label>
      <input
        type="range"
        name="animationDuration"
        min="0"
        max="10000"
        value={animationDuration}
        onChange={event =>
          handleInputChange(event, INPUT_TYPE.ANIMATION_DURATION)
        }
      />
      <label htmlFor="step">{`Step: ${step}`}</label>
      <input
        type="range"
        name="step"
        min="1"
        max="10"
        value={step}
        onChange={event => handleInputChange(event, INPUT_TYPE.STEP)}
      />
      <label htmlFor="isInfinite">{`Infiinite: ${isInfinite}`} </label>
      <input
        name="isInfinite"
        type="checkbox"
        checked={isInfinite}
        onChange={event => handleInputChange(event, INPUT_TYPE.INFINITE)}
      />
    </section>
  );
};

export default ControlPanel;
