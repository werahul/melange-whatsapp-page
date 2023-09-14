import React from 'react'
import { comma, SanketSir } from '../../assets/images'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:px-[130px] font-nunito lg:pb-20 pb-[70px]  px-5'>
      <img src={comma} alt="" className='lg:w-auto w-[50px]' />
      <img src={SanketSir} alt="" className='mt-8 lg:w-auto w-[130px]' />
      <div className=" lg:text-center text-zinc-900 lg:text-2xl text-base font-normal lg:leading-[34px] mt-7">Today, simply spending money on ads isn't enough to gain a competitive edge; everyone's doing it. Traditional marketing channels often struggle to engage modern audiences effectively. The true differentiator for your business lies in your ability to seize control of the buyer experience once they click on your ad and visit your website.</div>
      <div className=" lg:text-center text-zinc-900 lg:text-2xl text-base font-normal lg:leading-[34px] mt-4">With WhatsApp Marketing, businesses have found the solution they need. It provides real-time, personalized, and high-engagement communication, bridging the gap between businesses and their tech-savvy customers. It's not just a trend; it's a transformation in the way we connect and convert in the digital age.</div>
      <div className="w-full flex justify-start lg:justify-center items-center mt-6">
        <p className="lg:text-center my-auto  gradiant-text lg:text-xl text-base lg:font-bold font-semibold lg:leading-relaxed leading-tight">Sanket Bolinjkar, <br />Founder and CEO of Mélange Digital</p>
      </div>

    </div>
  )
}

export default Testimonials