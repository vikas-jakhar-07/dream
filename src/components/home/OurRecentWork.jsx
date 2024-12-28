import Heading from '../common/Heading'
import SecondHeading from '../common/SecondHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { OUR_RECENT_WORK_DATA_LIST } from '../common/Helper';
import Icon from '../common/Icons';
import Paragraph from '../common/Paragraph';

const OurRecentWork = () => {
    return (
        <section className='relative pt-24 lg:pt-10 mt-10 sm:mt-14 lg:mt-0'>
            <div className="max-w-[1920px] pt-24 lg:pt-0 mx-auto w-full relative">
                <div className="container mt-3 relative z-10 flex-col lg:flex-row flex items-center justify-between">
                    <div className="flex flex-col">
                        <Heading className='text-center lg:text-left sm:mt-8 lg:mt-0'>Our Recent Work</Heading>
                        <SecondHeading className='text-center lg:text-left'>By Our <span>Experts</span></SecondHeading>
                    </div>
                    <Paragraph className='max-w-[515px] w-full text-center lg:text-left mt-2 !opacity-100 lg:mt-0'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
                </div>
                <div className="relative z-10 !ml-5 lg:!ml-[calc((100vw-1024px)/2+150px)] xl:!ml-[calc((100vw-1340px)/2+242px)] custom-ml !mr-0">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.prev-button',
                            nextEl: '.next-button',
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper !py-8 lg:!py-14 md:!py-12 sm:!py-10 xl:!py-20 !pl-3"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = '.prev-button';
                            swiper.params.navigation.nextEl = '.next-button';
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.45,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 1.74,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 35,
                            },
                            1200: {
                                slidesPerView: 2.2,
                                spaceBetween: 35,
                            },
                            1280: {
                                slidesPerView: 2.47,
                                spaceBetween: 38,
                            },
                            1400: {
                                slidesPerView: 2.506,
                                spaceBetween: 43,
                            },
                            1536: {
                                slidesPerView: 2.7,
                                spaceBetween: 42,
                            },
                            1920: {
                                slidesPerView: 3.19,
                                spaceBetween: 44,
                            },
                        }}
                    >
                        {OUR_RECENT_WORK_DATA_LIST.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full sm:min-h-[365px] shadow-3xl bg-white py-6 px-3.5 rounded-[10px]">
                                    <div className="flex justify-between gap-1">
                                        <img src={items.desktopImage} alt="" className='w-full max-w-[180px] sm:max-w-[286px]' />
                                        <img src={items.mobileImage} alt="" className='w-full max-w-[60px] sm:max-w-[89px]' />
                                    </div>
                                    <div className="flex items-center justify-between mt-8 pt-px md:pl-4 md:pr-2">
                                        <p className='text-off-black font-bold text-xl sm:text-2xl sm:leading-9'>{items.title}</p>
                                        <button className='font-medium text-off-black text-xs sm:text-sm py-px px-3 border rounded-[100px] border-deep-gray duration-300 ease-linear hover:text-white hover:bg-off-black'>View Work</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex items-center w-fit gap-3.5 md:-mt-4 mx-auto lg:absolute relative lg:left-[calc((100vw-1024px)/2+100px)] xl:left-[calc((100vw-1340px)/2+179px)] lg:bottom-2 xl:bottom-8 z-10 work-custom-left">
                    <Icon iconName='arrow' className='prev-button group duration-300 ease-linear hover:border-off-yellow hover:bg-off-black hover:opacity-100 cursor-pointer w-[35px] h-[34px] rounded-full justify-center items-center opacity-[33%] rotate-180 border-2 border-black' />
                    <Icon iconName='arrow' className='next-button group duration-300 ease-linear hover:border-off-yellow hover:bg-off-black cursor-pointer w-[35px] h-[34px] rounded-full justify-center items-center border-2 border-black' />
                </div>
            </div>
            <div className="lg:top-2.5 top-[172px] md:top-[180px] absolute z-[1] bg-off-cream opacity-30 h-[600px] sm:h-[745px] lg:h-[673px]  lg:rounded-tl-[400px] md:rounded-tl-[300px] sm:rounded-tl-[200px] w-full xl:left-[calc((100vw-1340px)/2+144px)] lg:left-[calc((100vw-1024px)/2+80px)]"></div>
        </section>
    )
}

export default OurRecentWork