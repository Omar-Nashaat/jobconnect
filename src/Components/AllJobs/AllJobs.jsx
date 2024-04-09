import React from 'react'
import style from './AllJobs.module.css'

export default function AllJobs() {
    return <>
        <div className="container">
            <div>
                <h3 className='text-white mt-3'>Filter Jobs</h3>
                <div className="row">
                    <div className="col-md-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Job Type</option>
                            <option value="1">Full Time</option>
                            <option value="2">Part Time</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Salary Range</option>
                            <option value="1">100$ - 300$</option>
                            <option value="2">300$ - 600$</option>
                            <option value="3">600$ - 900$</option>
                            <option value="4">Above 900$</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Creation Data</option>
                            <option value="1">Today</option>
                            <option value="2">Last Week</option>
                            <option value="3">Last Month</option>
                        </select>
                    </div>
                </div>
                <div className={style.whiteLine + " mt-3"}></div>
            </div>
            <div className="row mt-3">
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class={style.jobCard + " text-center bg-white rounded-3 p-4 shadow-sm m-1 mb-2"}>
                        <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                            <i class="fa-solid fa-user-plus fs-4"></i>
                        </div>
                        <h4 class="pt-4 pb-1">Junior Web Developer</h4>
                        <p>Value<i class={style.checkIcon + " fa-solid fa-circle-check ps-2"}></i></p>
                        <div className="mb-3">
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Maddi</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>$ 1000 - 1,500</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>With Perks</button>
                            <button className={style.jobBtnBlack + " btn rounded-3 me-1 mb-1"}>Part time</button>
                        </div>
                        <div>
                            <button className={style.jobBtnApply + " btn rounded-3 me-1 rounded-3 fs-5"}>Apply<i class="fa-solid fa-link ps-1"></i></button>
                            <button className={style.jobBtnSave + " btn rounded-3 me-1 rounded-3 fs-5"}>Save<i class="fa-regular fa-bookmark ps-2"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
