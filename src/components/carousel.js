import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        <div className='w-[100%] flex flex-col justify-center align-center'>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
          {/* <p>Ask ResQbot </p> */}
        </div>
        <div className='w-[100%] flex flex-col justify-center align-center'>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
          {/* <p>Giving us permisson to use your location helps us alert health centres where to find you </p> */}
        </div>
        <div className='w-[100%] flex flex-col justify-center align-center'>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
          {/* <p>Set up your health centres and special ones contact</p> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
