import React from 'react'
import { analytics, incRevenue, icon1, icon2, icon3, icon4, icon5, icon6,show1, show2 } from '../../assets/images'

const ShowCase = () => {
    return (
        <div className='showCase lg:pt-[56px] pt-[45px] lg:pb-[71px] pb-[50px] lg:px-20 px-5 font-nunito relative' >
            <div className=" lg:text-center text-zinc-900 lg:text-[40px] text-2xl font-semibold lg:leading-[48px] leading-[31.20px]">Unlock Faster Revenue with the Magic of Conversational Marketing</div>
            <div className="lg:text-center text-black lg:text-xl text-base font-normal lg:leading-[30px] mt-4">Maybe it’s time to speed things up.</div>
            <div className="lg:px-[150px] lg:text-center text-black lg:text-xl text-base font-normal lg:leading-[30px]">Struggling to make a mark on WhatsApp? You're not alone. Many businesses face the same challenges, and we understand your pain points and here's how we can help.<br /></div>

            <div className="boxes grid lg:grid-cols-3 grid-cols-1 lg:gap-x-[30px] gap-y-[32px] mt-8">
                <div className="w-full lg:h-[320px] h-auto bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px] animate-pulse ">
                        <img src={icon1} alt="" className='lg:h-auto h-[80px]'  />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-2 mt-3">Automation</div>
                    <div className="lg:w-full w-full lg:h-[119px] h-auto text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">Say goodbye to manual messaging. Our platform automates your WhatsApp marketing, saving you time and effort.</div>
                </div>
                <div className="w-full lg:h-[320px] h-auto bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px]  animate-pulse">
                        <img src={icon2} alt="" className='lg:h-auto h-[80px]' />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-0 mt-3">Increased Revenue</div>
                    <div className=" lg:h-[119px] text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">By reaching your target audience more effectively, you'll see a significant boost in conversion rates and revenue.</div>
                </div>
                <div className="w-full lg:h-[320px] h-auto bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px]  animate-pulse">
                        <img src={icon3} alt="" className='lg:h-auto h-[80px]' />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-0 mt-3">Analytics</div>
                    <div className="w-full  text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">Get valuable insights into your campaign performance and make data-driven decisions to optimize your strategy.</div>
                </div>
                <div className="w-full lg:h-[320px] h-60 bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px] animate-pulse">
                        <img src={icon4} alt="" className='lg:h-auto h-[80px]' />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-0 mt-3">Personalization</div>
                    <div className=" h-[119px] text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">Tailor your messages to each customer, creating a more engaging and personalized experience.</div>
                </div>
                <div className="w-full lg:h-[320px] h-60 bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px] animate-pulse">
                        <img src={icon5} alt="" className='lg:h-auto h-[80px]' />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-0 mt-3">Compliance Assurance</div>
                    <div className="h-[119px] text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">We stay up-to-date with WhatsApp's policies, ensuring your campaigns remain compliant.</div>
                </div>
                <div className="w-full lg:h-[320px] h-60 bg-white rounded font-nunito px-[26px] py-5" >
                    <div className="lg:h-[120px] animate-pulse">
                        <img src={icon6} alt="" className='lg:h-auto h-[80px]' />
                    </div>
                    <div className="text-zinc-900 lg:text-2xl text-xl font-bold lg:leading-[34px] leading-[30px] lg:mt-0 mt-3">24/7 Support</div>
                    <div className=" h-[119px] text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px]">Whenever you need help, our dedicated support team is here to provide the answers.</div>
                </div>


            </div>
            <div className="lg:block hidden absolute top-[12%] left-[7%]"><img src={show1} alt="" /></div>
            <div className="lg:block hidden absolute bottom-[17%] right-[2%]"><img src={show2} alt="" /></div>
        </div>
    )
}

export default ShowCase