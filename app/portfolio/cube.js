"use client";
import Image from 'next/image'
import styles from "./slide.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';


const images = [

    "/top/me_ver2.jpg",
    "/top/me_ver2.jpg",
    "/top/me_ver2.jpg",
    "/top/me_ver2.jpg",

];


export default function Cube() {


    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[Autoplay, EffectCube]}
                loop={true}

                speed={600}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                className={styles.mySwiper}

            >
                <SwiperSlide className={styles.mySwiper_slide}>
                    <Image
                        src="/top/me.jpg"
                        width={300}
                        height={300}
                        alt="Slider Image"
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        className={styles.slideImage}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.mySwiper_slide}>
                    <Image
                        src="/top/me_ver2.jpg"
                        width={300}
                        height={300}
                        alt="Slider Image"
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        className={styles.slideImage}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.mySwiper_slide}>
                    <Image
                        src="/top/me.jpg"
                        width={300}
                        height={300}
                        alt="Slider Image"
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        className={styles.slideImage}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.mySwiper_slide}>
                    <Image
                        src="/top/me_ver2.jpg"
                        width={300}
                        height={300}
                        alt="Slider Image"
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        className={styles.slideImage}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

/*

<Image src="/slide/dajare.png" style={{objectFit: "cover"}} alt={"me"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill  priority={true}></Image>

*/