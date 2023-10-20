import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    const [info, setInfo] = useState({});
    const { photoURLs, titles } = info;
    useEffect(() => {
        fetch('http://localhost:5000/brands/banner')
            .then(res => res.json())
            .then(data => {
                // console.log(data.photoURLs, data.titles);
                setInfo(data);
            })
            .catch(error => console.log(error.message));
    }, [])
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(${photoURLs?.photo_1}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover'
                        }}
                            className="h-[80vh] flex justify-center items-center pt-16">
                            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{titles?.title_1}</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(${photoURLs?.photo_2}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover'
                        }}
                            className="h-[80vh] flex justify-center items-center pt-16">
                            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{titles?.title_2}</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(${photoURLs?.photo_3}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover'
                        }}
                            className="h-[80vh] flex justify-center items-center pt-16">
                            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">{titles?.title_3}</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;