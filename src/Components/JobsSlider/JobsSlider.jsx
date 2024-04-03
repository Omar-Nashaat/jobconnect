import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './JobSlider.module.css';

export default function JobsSlider() {
    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-user-plus fs-4"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Egypt , Maddi<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                    <div className="mb-3">
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Ghana</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>$ 1000 - 1,500</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Part time</button>
                    </div>
                    <div>
                        <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                    </div>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-user-plus fs-4"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Egypt , Maddi<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                    <div className="mb-3">
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Ghana</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>$ 1000 - 1,500</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Part time</button>
                    </div>
                    <div>
                        <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                    </div>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-user-plus fs-4"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Egypt , Maddi<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                    <div className="mb-3">
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Ghana</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>$ 1000 - 1,500</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Part time</button>
                    </div>
                    <div>
                        <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                    </div>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-user-plus fs-4"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Egypt , Maddi<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                    <div className="mb-3">
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Ghana</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>$ 1000 - 1,500</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Part time</button>
                    </div>
                    <div>
                        <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                    </div>
                </div>
            </div>
            <div>
                <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1"}>
                    <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                        <i class="fa-solid fa-user-plus fs-4"></i>
                    </div>
                    <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                    <p>Egypt , Maddi<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                    <div className="mb-3">
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Ghana</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>$ 1000 - 1,500</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                        <button className={style.jobBtnBlack + " btn rounded-3 me-1"}>Part time</button>
                    </div>
                    <div>
                        <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                    </div>
                </div>
            </div>
        </Slider>
    );
}