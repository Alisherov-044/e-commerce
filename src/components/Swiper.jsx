// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { SlideButton } from "./SlideButton";
// import { SlidePrevButton } from "./SlidePrevButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            <SwiperSlide>
                <div className="swiper__slide">
                    <div className="swiper__content">
                        <h1 className="swiper__title">
                            HP VICTUS
                            <span className="swiper__title--black"> 15 </span>
                        </h1>
                        <p className="swiper__title--coment">
                            СОЗДАН ДЛЯ{" "}
                            <sapn className="swiper__coment--black">
                                ПРОФЕССИОНАЛОВ
                            </sapn>{" "}
                            ОТ ПРОФЕССИОНАЛОВ
                        </p>
                    </div>
                    <img
                        className="swiper__img"
                        src="../public/b57f281c085144942f87ae7af7e7ba0f.png"
                        alt="Notebook"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper__slide">
                    <div className="swiper__content">
                        <h1 className="swiper__title">
                            HP VICTUS
                            <span className="swiper__title--black"> 15 </span>
                        </h1>
                        <p className="swiper__title--coment">
                            СОЗДАН ДЛЯ{" "}
                            <sapn className="swiper__coment--black">
                                ПРОФЕССИОНАЛОВ
                            </sapn>{" "}
                            ОТ ПРОФЕССИОНАЛОВ
                        </p>
                    </div>
                    <img
                        className="swiper__img"
                        src="../public/b57f281c085144942f87ae7af7e7ba0f.png"
                        alt="Notebook"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper__slide">
                    <div className="swiper__content">
                        <h1 className="swiper__title">
                            HP VICTUS
                            <span className="swiper__title--black"> 15 </span>
                        </h1>
                        <p className="swiper__title--coment">
                            СОЗДАН ДЛЯ{" "}
                            <sapn className="swiper__coment--black">
                                ПРОФЕССИОНАЛОВ
                            </sapn>{" "}
                            ОТ ПРОФЕССИОНАЛОВ
                        </p>
                    </div>
                    <img
                        className="swiper__img"
                        src="../public/b57f281c085144942f87ae7af7e7ba0f.png"
                        alt="Notebook"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper__slide">
                    <div className="swiper__content">
                        <h1 className="swiper__title">
                            HP VICTUS
                            <span className="swiper__title--black"> 15 </span>
                        </h1>
                        <p className="swiper__title--coment">
                            СОЗДАН ДЛЯ
                            <sapn className="swiper__coment--black">
                                ПРОФЕССИОНАЛОВ
                            </sapn>
                            <br />
                            ОТ ПРОФЕССИОНАЛОВ
                        </p>
                    </div>
                    <img
                        className="swiper__img"
                        src="../public/b57f281c085144942f87ae7af7e7ba0f.png"
                        alt="Notebook"
                    />
                </div>
            </SwiperSlide>
            <SlideButton></SlideButton>
        </Swiper>
    );
};
