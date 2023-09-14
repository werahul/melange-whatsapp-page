import React from 'react'
import { abImg, check ,triBlue } from '../../assets/images'

const WorkWithUs = () => {
    return (
        <div className='pt-10 lg:px-20 px-5 workWithUs relative' >

            <div className="flex lg:flex-row flex-col-reverse items-center">
                <div className="w-[70%]">
                    <img src={abImg} alt="" />
                </div>
                <div className="font-nunito">
                    <div className="text-zinc-900 lg:text-[40px] text-2xl lg:font-semibold font-bold lg:leading-[48px] leading-[34px]">Work With Us</div>
                    <div className="text-black lg:text-xl text-base font-normal lg:leading-relaxed leading-tight">We are a Conversational Marketing agency helping businesses scale their profits with the help of WhatsApp. We will help,</div>
                    <div className="flex items-center space-x-3 mt-6 ">
                        <img src={check} alt="" className='lg:w-auto w-6 animate-pulse' />
                        <div className=" text-black lg:text-2xl text-base font-semibold lg:leading-[34px] leading-tight">Bring Your Business On WhatsApp</div>
                    </div>
                    <div className="flex items-center space-x-3 mt-5">
                    <img src={check} alt="" className='lg:w-auto w-6 animate-pulse' />
                        <div className=" text-black lg:text-2xl text-base font-semibold lg:leading-[34px] leading-tight">Automate Sales Processes</div>
                    </div>
                    <div className="flex items-center space-x-3 mt-5">
                    <img src={check} alt="" className='lg:w-auto w-6 animate-pulse' />
                        <div className=" text-black lg:text-2xl text-base font-semibold lg:leading-[34px] leading-tight">Sell More With Existing Customers</div>
                    </div>
                    <div className="flex items-start space-x-3 mt-5">
                    <img src={check} alt="" className='lg:w-auto w-6 animate-pulse' />
                        <div className=" text-black lg:text-2xl text-base font-semibold lg:leading-[34px] leading-tight">Increase Customer Loyalty & Lifetime Value</div>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden absolute bottom-[5%] left-[50%] "><img src={triBlue} alt="" /></div>
            <div className="lg:block hidden absolute top-[10%] left-[70%] "><img src={triBlue} alt="" /></div>
        </div>
    )
}

export default WorkWithUs