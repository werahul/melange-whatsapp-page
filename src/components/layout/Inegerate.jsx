import React from 'react'
import { int1, int2, int3, int4 ,triBlue, triPurple } from '../../assets/images'

const Inegerate = () => {
    return (
        <div className='lg:px-48 lg:py-20 py-[50px] px-5 font-nunito relative'>
            <div className=" lg:text-center gradiant-text lg:text-[40px] text-2xl font-semibold lg:leading-[48px] leading-[31.20px]">Why to Integrate <br className='lg:block hidden'/> WhatsApp Conversational Marketing?</div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-8 lg:gap-y-0 gap-y-6">
                <div className="lg:border-gray-300  lg:border-r lg:border-b lg:h-[300px] flex flex-col justify-center items-start lg:items-center font-nunito  lg:mt-0 mt-8">
                    <img src={int1} alt="" className='-ml-4 animate-pulse' />
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">Instant Impact</div>
                    <div className=" h-[62px] lg:w-[80%] lg:text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">Reach your audience in real-time connections that keeps them informed and intrigued.</div>
                </div>


                <div className="lg:border-gray-300 lg:border-l lg:border-b lg:h-[300px] flex flex-col justify-center items-start lg:items-center font-nunito lg:px-4">
                    <img src={int2} alt="" className='animate-pulse'/>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">Sky-High Engagement</div>
                    <div className="h-[62px] lg:w-[90%] lg:text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">WhatsApp messages boast unparalleled open rates, ensuring your messages get noticed.</div>
                </div>
                <div className="lg:border-gray-300  lg:border-t lg:border-r  lg:h-[300px] flex flex-col justify-center items-start lg:items-center font-nunito">
                    <img src={int3} alt="" className='animate-pulse'/>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">Seamless Communication</div>
                    <div className="h-[62px] lg:w-[80%] lg:text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">Foster direct, one-on-one conversations with potential customers, creating a personal and engaging experience.</div>
                </div>

                <div className="lg:border-gray-300 lg:border-t lg:border-l lg:h-[300px] flex flex-col justify-center items-start lg:items-center font-nunito lg:mt-0 mt-4">
                    <img src={int4} alt="" className='animate-pulse'/>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">Visual Appeal</div>
                    <div className="h-[62px] w-[85%] lg:text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">Leverage rich media to showcase your offerings, making it easier for potential customers to convert.</div>
                </div>
              
            </div>
            <div className=" lg:block hidden absolute top-[15%] left-[15%] animate-pulse"><img src={triBlue} alt="" /></div>
            <div className=" lg:block hidden absolute bottom-[15%] right-[10%] animate-pulse"><img src={triPurple} alt="" /></div>
        </div>
    )
}

export default Inegerate