import yellowEllipse from "../../assets/images/webp/yellow-ellipse.webp";
import meeting from "../../assets/images/webp/hero-meeting.webp";
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';
import Navbar from "../common/Navbar";

const Hero = () => {
    return (
        <section className='relative max-w-[1920px] mx-auto w-full'>
            <Navbar />
            <div className="container relative z-10 pt-5 mt-5 lg:mt-0 lg:pt-0">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-7 xl:gap-2">
                    <div className="max-w-[515px] w-full">
                        <h2 className='xl:text-custom-4xl text-center lg:mt-12 lg:text-left sm:mb-5 mb-3 lg:mb-7 text-custom-3xl leading-10 sm:text-6xl xl:leading-custom-4xl text-off-black font-light -tracking-xl'><span className='font-bold'>We Help you</span> to grow your <span className='relative after:absolute after:left-0 after:w-[96%] after:h-2 sm:after:h-5 after:bg-off-yellow after:bottom-4 xl:after:bottom-7 after:-z-10'>Business</span></h2>
                        <Paragraph className='text-center lg:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                        <Button className='lg:mt-10 md:mt-6 mt-4 px-11 lg:px-[49.5px] mx-auto block lg:mx-0'>Get Started</Button>
                    </div>
                    <img src={meeting} alt="meeting" className='max-w-[731px] w-9/12 lg:w-7/12 xl:w-full meeting-image' />
                </div>
            </div>
            <img src={yellowEllipse} alt="yellowEllipse" className='top-0 right-0 absolute' />
        </section>
    )
}

export default Hero