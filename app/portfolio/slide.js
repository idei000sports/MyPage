"use client";
import Image from 'next/image'
import styles from './slide.module.css'
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    {
        src: "/top/me_ver2.jpg",
        title: "About",
        description: "私について",
        href: "/portfolio/about"
    },
    {
        src: "/slide/dajare.png",
        title: "ダジャレ作成機",
        description: "母音からダジャレを作成",
        href: "/dajare"
    },
    {
        src: "/slide/map.png",
        title: "地図",
        description: "結成地の地図",
        href: "/map"
    },
    {
        src: "/slide/dajare.png",
        title: "ダジャレ作成機",
        description: "母音からダジャレを作成",
        href: "/dajre"
    },
    {
        src: "/slide/dajare.png",
        title: "ダジャレ作成機",
        description: "母音からダジャレを作成",
        href: "/dajare"
    },
];


export default function Slide() {

    const Content = ({ src, title, description, href }) => {
        return (
            <>
                <div style={{ paddingBottom: "2em" }}>
                    <Link href={href} >
                        <div className={styles.image}>
                            
                            <Image
                                src={src}
                                width={200}
                                height={200}
                                alt="Slider Image"
                                sizes="(min-width: 1024px) 100vw, 60vw"
                                className={styles.slideImage}
                            />

                        </div>
                        <h4>{title}</h4>
                        <h5>{description}</h5>

                    </Link>
                </div>

            </>
        )
    }

    return (
        <>
        
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                //余白
                spaceBetween={50}
                //何枚表示するか
                slidesPerView={3}

                //矢印の表示
                //navigation
                //下部の◯の表示
                pagination={{ clickable: true }}
                //下部のスクロールバーの表示
                //scrollbar={{ draggable: true }}

                //末の状態でクリックしたら頭出し
                loop={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

            >

                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Content title={item.title} description={item.description} src={item.src} href={item.href} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}

/*

<Image src="/slide/dajare.png" style={{objectFit: "cover"}} alt={"me"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill  priority={true}></Image>

*/