import React from 'react'
import meeting from "../../assets/images/webp/about-meeting.webp";
import Heading from '../common/Heading';
import SecondHeading from '../common/SecondHeading';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

const AboutUs = () => {
    return (
        <section className='pt-2 xl:py-24'>
            <div className="container pb-24 xl:py-24 relative -mt-1">
                <div className="flex items-center justify-between pt-20 pb-24 lg:pb-0 xl:pb-8">
                    <img src={meeting} alt="meeting" className='absolute w-full max-w-[375px] sm:max-w-max sm:w-8/12 md:w-7/12 lg:bottom-auto lg:w-1/2 xl:w-auto left-1/2 bottom-4 sm:bottom-6 md:bottom-5 -translate-x-1/2 lg:translate-x-0 translate-y-1/2 lg:-left-3 xl:-left-7 lg:top-[47%] lg:-translate-y-1/2' />
                    <div className="ml-auto lg:max-w-[515px] w-full relative z-10">
                        <Heading className='text-center lg:text-left sm:mt-5 lg:mt-0'>About Us</Heading>
                        <SecondHeading className='text-center lg:text-left'>Fake or <span>Real</span></SecondHeading>
                        <Paragraph className='md:mt-5 mt-2 pt-0.5 text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Paragraph className='md:mt-6 mt-3 text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Button className='md:mt-10 mt-4 px-8 sm:px-10 block mx-auto lg:mx-0'>Explore More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs