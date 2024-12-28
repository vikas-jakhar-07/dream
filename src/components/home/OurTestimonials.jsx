import React from 'react'
import Heading from '../common/Heading'
import SecondHeading from '../common/SecondHeading'
import Icon from '../common/Icons'

const OurTestimonials = () => {
    return (
        <section className='lg:py-16 py-14'>
            <div className="container pt-10 sm:pt-8 lg:-mt-1.5 lg:pt-0 pb-3 sm:pb-7">
                <Heading className='text-center sm:mt-16 xl:mt-2'>Our Testimonials</Heading>
                <SecondHeading className='text-center'>What Our Clients Are <span>Saying</span></SecondHeading>
                <div className="flex justify-center md:flex-row flex-col items-center md:gap-6 lg:gap-12 xl:gap-[69px] pt-4 md:pt-9">
                    {[0, 1].map((index) => (
                        <div key={index} className="max-w-[448px] mt-6 w-full py-7 sm:pt-9 sm:pb-7 px-6 sm:px-[30px] sm:min-h-[310px] h-full bg-white shadow-5xl duration-300 ease-linear hover:shadow-lg hover:shadow-off-black">
                            <Icon iconName='doubleQuotes' />
                            <p className='sm:mt-7 mt-4 pt-0.5 text-off-black font-normal text-base sm:leading-custom-2xl tracking-2xl max-w-[384px] w-full'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <div className="flex items-center mt-5 gap-1.5">
                                <span className='flex w-[11px] h-[3px] bg-off-yellow'></span>
                                <p className='text-black text-base leading-custom-2xl font-semibold tracking-2xl ml-px'>UI Soup</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTestimonials