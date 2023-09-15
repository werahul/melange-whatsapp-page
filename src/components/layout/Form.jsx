import React, {useEffect, useState, useRef} from 'react'
import { triBlue, triPurple, rock1, rock2 } from '../../assets/images'
import emailjs from '@emailjs/browser'

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };



    const formField = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            company,
          
        };

        // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
        emailjs
            .send(
                "service_melangedigital",
                "template_d80pgaj",
                {
                    from_name: formData.name,
                    to_name: "Sanket Bolinjkar",
                    from_email: formData.email,
                    from_phone: formData.phone,
                    from_company: formData.company,
               
                    to_email: "hello@melangedigital.in",
                               },
                "11W3shu7B6S46t437"
            )
            .then(
                () => {
                    alert(
                        "Thank you for filling the form."
                    );
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert("Something went wrong!");
                }
            );

        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        
    };
    return (
        <div className='formSec pt-[40px] pb-[48px] lg:px-20 px-5 font-nunito relative' id='contactus'>
            <div className="lg:text-center text-zinc-900 lg:text-[40px] text-2xl font-semibold lg:leading-[48px] leading-[34px]">Ready to Grow?</div>
            <div className="lg:px-[15%] lg:text-center text-black lg:text-xl text-base font-normal lg:leading-[30px] mt-2">Don't miss out on the immense potential of WhatsApp for your business. <br />Join our WhatsApp Marketing Service today and watch your brand soar to new heights!</div>
            <form onSubmit={handleSubmit} ref={formField}>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 lg:gap-y-6 gap-y-3 lg:mt-9 mt-6 lg:px-[8%]">

                    <input value={name} onChange={handleNameChange} required type="text" placeholder='Name*' className='w-full outline-none font-nunito lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3' />

                    <input value={phone} onChange={handlePhoneChange} required type="tel" placeholder='Mobile no*' className='w-full outline-none font-nunito  lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3' />

                    <input value={email} onChange={handleEmailChange} required type="email" placeholder='Company email id*' className='w-full outline-none font-nunito  lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3' />

                    <input value={company} onChange={handleCompanyChange} required type="text" placeholder='Company name*' className='w-full outline-none font-nunito  lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3' />

                </div>

                <div className="flex justify-center items-center lg:mt-8 mt-[19px]">
                    <button type='submit' className="lg:w-28 w-full h-11 px-[23px] py-0.5 bg-gradient-to-l submitBtn rounded-[100px] justify-center items-center gap-3 inline-flex font-nunito text-white text-xl font-semibold  leading-[35px]">Submit</button>
                </div>
            </form>
            <div className=" lg:block hidden absolute -bottom-[20%] left-[0%]"><img src={rock1} alt="" /></div>
            <div className=" lg:block hidden absolute bottom-[10%] right-[0%]"><img src={rock2} alt="" /></div>
            <div className=" lg:block hidden absolute top-[10%] left-[20%] "><img src={triBlue} alt="" /></div>
            <div className=" lg:block hidden absolute bottom-[10%] right-[10%]"><img src={triPurple} alt="" /></div>

        </div>
    )
}

export default Form