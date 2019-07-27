import React from 'react';
import './scss/App.scss';
import Carousel from './components/Carousel';

const sliderContainter = {
  width: 130 * 4 + 'px',
  maxHeight: '130px'
};

function App() {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
