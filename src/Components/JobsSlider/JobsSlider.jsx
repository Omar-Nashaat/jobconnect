import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './JobSlider.module.css';

export default function JobsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,

    };
    return (
        <Slider {...settings}>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>

            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                        Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
        </Slider>
    );
}