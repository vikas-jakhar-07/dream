import React, { useState } from 'react'

const GetInTouch = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
            setIsSubmitted(false);
        }, 1500);
    }
    return (
        <section className='bg-black sm:rounded-tr-[158px] py-10 sm:py-14 md:py-16 relative overflow-hidden'>
            <div className="container sm:pt-0.5 sm:pb-3">
                <div className="flex justify-between gap-10 lg:pr-1.5 flex-col lg:flex-row">
                    <div className="lg:max-w-[439px] w-full">
                        <h2 className='font-playfair text-4xl tracking-xl text-white font-medium text-center lg:text-left'>Dream Agency</h2>
                        <p className='tracking-2xl text-white font-normal text-base sm:leading-custom-2xl mt-3.5 pt-px text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <p className='tracking-2xl font-semibold text-base sm:leading-custom-2xl uppercase text-white mt-4 md:mt-7 pb-px text-center lg:text-left'>Get In Touch</p>
                        <form onSubmit={handleSubmit} name='emailFrom' method="get" className='border pl-3 border-white max-w-[406px] w-full h-[52px] flex items-center mt-3.5 mx-auto lg:mx-0'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='text-white py-2 max-w-[263px] w-full bg-transparent placeholder:text-white placeholder:uppercase outline-none font-normal text-base tracking-2xl' required />
                            <button className='bg-white border border-white uppercase h-[52px] w-[143px] duration-300 ease-linear hover:bg-transparent hover:text-white text-base tracking-2xl font-semibold'>Send</button>
                        </form>
                        <div className={`${isSubmitted === true ? "right-[3%]" : "-right-full"} absolute bg-white py-5 px-5 text-nowrap shadow-5xl justify-center max-w-[250px] rounded-3xl w-1/2 border-b-2 border-green-600 flex items-center duration-300 ease-linear cursor-pointer bottom-[40%] lg:bottom-[15%] xl:bottom-[30%]`}>
                            <p className='font-semibold text-off-black text-base'>Send successfully</p>
                        </div>
                    </div>
                    <div className="xl:mr-24 lg:mr-10 max-w-[484px] mx-auto w-full mt-2.5">
                        <iframe className='max-w-[484px] min-h-[300px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157508.9080316857!2d-97.03284465580276!3d32.052045369245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1730739332540!5m2!1sen!2sin" title="Map of Texas, USA"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Map of Texas, USA"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch