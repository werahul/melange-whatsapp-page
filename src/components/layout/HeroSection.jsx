import React from 'react'
import { heroBg, heroImg, triPurple, triBlue } from '../../assets/images'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <div className="">


            <Navbar />
            <div className='heroSec lg:flex justify-between items-center lg:px-20 px-5 relative'>
                <div className="font-nunito lg:w-[50%] lg:py-0 pt-40">
                    <span className="text-black lg:text-5xl text-2xl lg:font-semibold font-bold lg:leading-[57.60px] leading-[31.20px]">Supercharge Your </span>
                    <span className="gradiant-text lg:text-5xl text-2xl font-bold lg:leading-[57.60px] leading-[31.20px]">WhatsApp Marketing</span>
                    <span className="text-black lg:text-5xl text-2xl lg:font-semibold font-bold lg:leading-[57.60px] leading-[31.20px]"> and Skyrocket Profits Rapidly!<br /></span>


                    <div className=" text-black lg:text-xl  text-base font-normal lg:leading-relaxed leading-tight mt-2 lg:mt-4">Unlock the potential of this powerful platform and revolutionize your marketing strategy with our WhatsApp Marketing Service.<br /></div>

                    <button className="text-white text-xl font-semibold leading-[35px] font-nunito w-[114px] h-11 px-[23px] py-0.5 bg-gradient-to-l from-indigo-500 to-purple-400 hover:from-purple-500 hover:to-indigo-500 rounded-[30px] justify-center items-center gap-3 inline-flex mt-4 lg:mt-4">Hire Us</button>

                </div>
                <div className="lg:mt-0 mt-14">
                    <img src={heroImg} alt="" />
                </div>

            </div>
            <div className=" lg:block hidden absolute top-[20%] left-[20%] animate-pulse"><img src={triPurple} alt="" /></div>
            <div className="lg:block hidden absolute top-[80%] left-[40%] animate-pulse"><img src={triBlue} alt="" /></div>
        </div>

    )
}

export default HeroSection