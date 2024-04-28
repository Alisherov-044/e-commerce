// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { Icons } from "./Icons";

export function SlideButton(promps) {
    const swiper = useSwiper();

    return (
        <div className="swiper__btn-wrap">
            <button
                className="swiper__btn-prev swiper-btn"
                onClick={() => swiper.slidePrev()}
            >
                <Icons.arrow.leftChervon />
            </button>
            <button
                className="swiper__btn-next swiper-btn"
                onClick={() => swiper.slideNext()}
            >
                <Icons.arrow.rightChervon />
            </button>
        </div>
    );
}
