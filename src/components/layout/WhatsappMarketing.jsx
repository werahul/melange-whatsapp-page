import React from 'react'
import { BlueEllipse, mobile, mobile2, pointerLine, pointerLine2, line1, line2, line3, line4, line5, line6, show1, show2 } from '../../assets/images'

const WhatsappMarketing = () => {
    return (
        <div className='whatsappMarketing  font-nunito lg:py-[51px] py-[45px] lg:px-20 px-5 relative'>
            <div className=" lg:px-[14rem] lg:text-center text-zinc-900 lg:text-[40px] text-2xl font-semibold font-nunito lg:leading-[48px] leading-[28.80px]">Unlock Unbeatable Conversion Rates with WhatsApp Marketing</div>
            <div className="lg:flex hidden lg:flex-row flex-col  lg:mt-[50px] justify-center items-center py-5">
                <div className="part1 w-[400px] border-2 ">

                    <div className="flex justify-center items-center ml-[5rem] ">
                        <div className="z-10 w-[279px]  h-[70px] bg-white hover:bg-slate-800  rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[18px] font-bold font-nunito">10x Higher Engagement</p>
                        </div>
                        <div className='-ml-[5rem]'><img src={pointerLine} alt="" className='animate-pulse' /></div>
                    </div>

                    <div className="flex justify-center items-center mr-[2rem] ">
                        <div className="z-10 w-[310px] lg:mt-[100px] h-[70px] bg-white hover:bg-slate-800   rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center  text-[18px] whitespace-nowrap font-bold font-nunito">Permission-Based Broadcasts</p>
                        </div>
                        <div className='mt-[100px] -ml-[4rem]'><img src={pointerLine} alt="" className='animate-pulse' /></div>
                    </div>

                    <div className="flex justify-center items-center ml-[5rem] ">
                        <div className="z-10 w-[240px] lg:mt-[100px] h-[70px] bg-white hover:bg-slate-800  rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center  text-[18px] font-bold font-nunito">Real-Time Conversion</p>
                        </div>
                        <div className='mt-[100px] -ml-[5rem]'><img src={pointerLine} alt="" className='animate-pulse' /></div>
                    </div>

                </div>

                <div className="part2 relative flex items-center justify-center  ">
                    <div className="mt-[5rem] h-[420px]">
                        <img src={BlueEllipse} alt="" />  
                    </div>
                    <div className="absolute">  <img src={mobile} alt="" className='ml-3'/></div>
                </div>

                <div className="part3 w-[450px]  ">
                    <div className="flex justify-center items-center">
                        <div className="-mr-[5rem]"><img src={pointerLine2} alt="" className='animate-pulse' /></div>
                        <div className="w-[270px]  z-10 h-[70px] bg-white hover:bg-slate-800 rounded flex justify-center items-center mr-[5rem]" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center  text-[18px] font-bold font-nunito">Cart Abandonment Solution</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="mt-[100px] -mr-[5rem]"><img src={pointerLine2} alt="" className='animate-pulse' /></div>
                        <div className="w-[320px] z-10 lg:mt-[100px] h-[70px] bg-white hover:bg-slate-800 rounded flex justify-center items-center -mr-[2rem]" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center  text-[18px] font-bold font-nunito">Personalized Shopping Experience</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="mt-[100px] -mr-[5rem] "><img src={pointerLine2} alt="" className='animate-pulse' /></div>
                        <div className="w-[220px] z-10 lg:mt-[100px] h-[70px] bg-white hover:bg-slate-800 rounded flex justify-center items-center mr-[8rem]" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center  text-[18px] font-bold font-nunito">24/7 Virtual Assistant</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="lg:hidden">


                <div className="part1  flex justify-between h-[130px]  mt-[47px] mb-8">
                    <div className="flex flex-col justify-center items-center">
                        <div className="z-10 w-[100px]  h-[66px] bg-white hover:bg-slate-800  rounded flex justify-center items-center mt-auto"  >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">10x Higher Engagement</p>
                        </div>
                        <img src={line1} alt="" className='w-8 h-10 ml-6' />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="z-10 w-[100px]  h-[66px] bg-white hover:bg-slate-800  rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">Permission-Based Broadcasts</p>
                        </div>
                        <img src={line2} alt="" className='w-2 h-20' />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="z-10 w-[100px]  h-[66px] bg-white hover:bg-slate-800  rounded flex justify-center items-center mt-auto" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">Real-Time Conversion</p>
                        </div>
                        <img src={line3} alt="" className='w-8 h-10 mr-8' />
                    </div>
                </div>
                <div className="part2 flex justify-center items-center ">
                    <img src={mobile2} alt="" />
                </div>

                <div className="part3 flex justify-between h-[100px] mt-8 ">
                    <div className="flex flex-col justify-center items-center">
                        <img src={line4} alt="" className='w-8 h-10 ml-8' />
                        <div className="z-10 w-[100px]  h-[66px] bg-white hover:bg-slate-800  rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">Cart Abandonment Solution</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={line5} alt="" className='w-2 h-20 ' />
                        <div className="z-10 w-[100px]  h-auto bg-white hover:bg-slate-800  rounded flex justify-center items-center mt-auto" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">Personalized Shopping Experience</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={line6} alt="" className='w-8 h-10 mr-8' />
                        <div className="z-10 w-[100px]  h-[66px] bg-white hover:bg-slate-800  rounded flex justify-center items-center" >
                            <p className="text-center gradiant-text2 border h-full w-full flex items-center justify-center text-[12px] font-bold font-nunito">24/7 Virtual Assistant</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden absolute top-[12%] left-[7%]"><img src={show2} alt="" /></div>
            <div className=" lg:block hidden absolute bottom-[17%] right-[2%]"><img src={show1} alt="" /></div>
        </div>
    )
}

export default WhatsappMarketing