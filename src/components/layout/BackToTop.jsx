import React, { useEffect, useState } from 'react'
import {BiUpArrowAlt} from "react-icons/bi"

const BackToTop = () => {


    const [showTop, setShowTop] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed  bottom-10 w-16 h-16 right-10 z-50 ${showTop ? 'block' : 'hidden'} `}>
            <a href="#/"><button className='rounded-full w-16 h-16 flex items-center justify-center bg-black  text-white'><BiUpArrowAlt className='w-12 h-12'/></button></a>
        </div>
    )
}

export default BackToTop