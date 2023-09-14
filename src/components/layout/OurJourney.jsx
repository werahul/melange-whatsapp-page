import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { our1, our2, our3, our4, ourlogo1, ourlogo2, ourlogo3, ourlogo4 } from "../../assets/images";

const CountingNumber = ({ value, duration }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = Math.ceil(value / (duration * 60));

            const timer = setInterval(() => {
                if (start >= value) {
                    clearInterval(timer);
                } else {
                    setCount(start);
                    start += increment;
                }
            }, 1000 / 60);
        }
    }, [inView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

const OurJourney = () => {
    return (
        <div className="font-nunito  py-20  ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
                <div className="w-auto md:w-full grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-0 mx-0 md:mx-20 ">
                    <div className="text-center mb-10 md:mb-0 ">
                        <img src={our1} alt="" className="mb-3 w-20 h-auto mx-auto" />
                        <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl lg:ml-0 ml-3">
                            <CountingNumber value={21} duration={2} /> <span className="-ml-2">+</span>
                        </h2>
                        <p className="w-full px-[10%] font-bold text-xl md:text-xl">Satisfied Clients</p>
                    </div>

                    <div className="text-center mb-10 md:mb-0">
                        <img src={our2} alt="" className="mb-3 w-20 h-auto mx-auto" />
                        <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl lg:ml-0 ml-3">
                            <CountingNumber value={96} duration={2} /> <span className="-ml-2">%</span>
                        </h2>
                        <p className="w-full px-[25%] font-bold text-xl md:text-xl">Open Rates</p>
                    </div>
                    <div className="text-center mb-10 md:mb-0">
                        <img src={our3} alt="" className="mb-3 w-20 h-auto mx-auto" />
                        <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl lg:ml-0 ml-3">
                            <CountingNumber value={11} duration={2} /> <span className="-ml-2">x</span>
                        </h2>
                        <p className="w-full px-[25%] font-bold text-xl md:text-xl">More Clicks</p>
                    </div>
                    <div className="text-center">
                        <img src={our4} alt="" className="mb-3 w-20 h-auto mx-auto" />
                        <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl lg:ml-0 ml-3">
                            <CountingNumber value={81} duration={3} /> <span className="-ml-2">%</span>
                        </h2>
                        <p className="w-full px-[5%] font-bold text-xl md:text-xl">Higher Engagement</p>
                    </div>
                </div>
            </div>
            <div className=" lg:px-[20%] px-5 lg:mt-[80px] mt-[30px] lg:text-center gradiant-text lg:text-[40px] text-2xl lg:font-semibold font-bold font-nunito lg:leading-[48px] leading-[31.20px]">Empowering WhatsApp Services through Strong Partnerships</div>
            <div className=" lg:text-center  lg:px-[15rem] px-5 text-black lg:text-xl text-base font-normal font-nunito lg:leading-[30px] lg:mt-2 mt-[14px]">When you choose our services, you gain access to a network of WhatsApp Service Providers, ensuring top-notch delivery and reliability.</div>
            <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center lg:px-20 px-5 items-center gap-x-[81.79px] lg:gap-y-0 gap-y-6 lg:mt-[45px] mt-6">
            <img src={ourlogo1} alt="" />
            <img src={ourlogo2} alt="" />
            <img src={ourlogo3} alt="" />
            <img src={ourlogo4} alt="" />
        </div>
        </div>
    );
};

export default OurJourney;
