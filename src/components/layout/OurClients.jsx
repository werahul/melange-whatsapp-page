import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { comma2 } from '../../assets/images';

const OurClients = ({ dotColor }) => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => {
            setSliderIndex(next);
        },
    };

    const reviews = [
        {
            text:
                "Switching to this service was a game-changer for our WhatsApp marketing. The results have been remarkable, and our conversion rates have soared.",
            author: "Sarah, Marketing Manager",
        },
        {
            text:
                "I was skeptical at first, but after partnering with them, our WhatsApp campaigns have been more effective than ever. Their expertise and support have been invaluable.",
            author: "John, Business Owner",
        },
        {
            text:
                "In the competitive world of e-commerce, credibility and trust are everything. This service not only improved our WhatsApp marketing but also enhanced our brand's reputation",
            author: "Vidya, CEO",
        },
    ];

    return (
        <div className='lg:py-20 py-[50px] lg:px-20 px-8 font-nunito'>
            <div className="text-center gradiant-text lg:text-[40px] text-2xl font-semibold leading-[48px]">
                Our Happy Clients
            </div>
            <Slider {...settings} className='lg:hidden block'>
                {reviews.map((review, index) => (
                    <div key={index} className="review-container">
                        <img src={comma2} alt="" className=' mx-auto my-4' />
                        <div className="text-center text-black text-lg font-normal leading-[30px] lg:mt-4 mt-4">
                            {review.text}
                        </div>
                        <div className="text-center text-black text-xl font-bold leading-[34px] mt-4">
                            {review.author}
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="slider-dots lg:hidden ">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === sliderIndex ? 'active' : ''}`}
                        style={{ backgroundColor: index === sliderIndex ? dotColor : '' }}
                    ></span>
                ))}
            </div>

             {<div className="lg:grid hidden lg:grid-cols-3 grid-cols-1 place-items-start gap-x-10 lg:mt-9 mt-6 ">
                <div className="font-nunito  flex flex-col justify-center items-start lg:items-center">
                    <img src={comma2} alt="" className='animate-pulse'/>
                    <div className=" lg:text-center text-black text-xl font-normal  leading-[30px] lg:mt-4 mt-4">Switching to this service was a game-changer for our WhatsApp marketing. The results have been remarkable, and our conversion rates have soared.</div>
                    <div className="text-black text-xl font-bold  leading-[34px] lg:mt-4 ">Sarah, Marketing Manager</div>
                </div>
                <div className="font-nunito flex flex-col justify-center items-start lg:items-center lg:mt-0 mt-4">
                    <img src={comma2} alt="" className='animate-pulse' />
                    <div className=" lg:text-center text-black text-xl font-normal  leading-[30px] lg:mt-4 mt-6">I was skeptical at first, but after partnering with them, our WhatsApp campaigns have been more effective than ever. Their expertise and support have been invaluable.</div>
                    <div className="text-black text-xl font-bold  leading-[34px] lg:mt-4">John, Business Owner</div>
                </div>
                <div className="font-nunito flex flex-col justify-center items-start lg:items-center lg:mt-0 mt-6">
                    <img src={comma2} alt="" className='animate-pulse' />
                    <div className=" lg:text-center text-black text-xl font-normal  leading-[30px] lg:mt-4 mt-4">In the competitive world of 
                    e-commerce, credibility and trust are everything. This service not only improved our WhatsApp marketing but also enhanced our brand's reputation</div>
                    <div className="text-black text-xl font-bold  leading-[34px] lg:mt-4">Vidya, CEO</div>
                </div>

             </div>}
        </div>

    );
};

export default OurClients;