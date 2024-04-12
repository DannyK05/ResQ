import React from 'react';
import Slider from 'react-slick';
import Hospital from "../assets/imgs/Hospital.png";
import Bot from "../assets/imgs/Robot.png";
import Family from "../assets/imgs/Family.png";
import { Link } from 'react-router-dom';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // changes every 5 seconds
  };

  return (
    <div className=" carousel w-[90%] mt-[20px] mb-[0] ml-4">
      <Slider {...settings}>
        <div className='w-[100%] '>
          <Link to="/settings"><img src={Hospital} alt="Slide 1" /></Link>
        </div>
        <div className='w-[100%] '>
        <Link to="/settings"> <img src={Bot} alt="Slide 2" /></Link>
        </div>
        <div className='w-[100%] '>
        <Link to="/settings"><img src={Family} alt="Slide 3" /></Link>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
