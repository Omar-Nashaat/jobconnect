import React from 'react'
import style from './Home.module.css'
import JobsSlider from '../JobsSlider/JobsSlider'

export default function Home() {
    return <>
        <div className={style.home}>
            <div className="container">
                <div className="row">
                    <div className={style.first + " col-md-7 text-white"}>
                        <h2>Find Remote jobs.</h2>
                        <h2>All in one place</h2>
                        <p>Scaling your technology needs just got easier with <br /> our
                            AI-powered platform for on-demand, remote IT <br /> solutions.
                            Discover the best talent for your business <br /> without the hassle.</p>
                        <a href="#jobs">
                            <button className='btn'>Browse Available Jobs</button>
                        </a>
                    </div>
                    <div className={style.second + " col-md-5"}>
                        <div className="col-md-12 mb-2">
                            <div className={style.card + ' bg-white w-100 row p-3'}>
                                <div className="col-md-3 text-center mt-2">
                                    <i className="fa-solid fa-video fa-2xl ps-2" style={{ color: '#006ec2' }} />
                                </div>
                                <div className="col-md-9">
                                    <p className='pt-2'>Video call interactive interview.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-2">
                            <div className={style.card + ' bg-white w-100 row p-3'}>
                                <div className="col-md-3 text-center mt-2">
                                    <i className="fa-solid fa-file fa-2xl ps-2" style={{ color: '#ff4242' }} />

                                </div>
                                <div className="col-md-9">
                                    <p className='pt-2'>Helps you building your CV.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-2">
                            <div className={style.card + ' bg-white w-100 row p-3'}>
                                <div className="col-md-3 text-center mt-2">
                                    <i className="fa-solid fa-book-open-reader fa-2xl ps-2" style={{ color: '#63E6BE' }} />
                                </div>
                                <div className="col-md-9">
                                    <p className='pt-2'>Getting you ready for the job.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='jobs' id='jobs'>
            <div className="container">
                <div className=' title text-center mt-5'>
                    <h2>Available<span style={{ color: '#fa4d04' }}> Jobs</span></h2>
                </div>
                <div className="jobsCards">
                    <JobsSlider />
                    {/* <div class="row gy-3">
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-solid fa-briefcase"></i>
                                </div>
                                <h4 class="pt-4 pb-1">WEB DESIGN</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-solid fa-list-check"></i>
                                </div>
                                <h4 class="pt-4 pb-1">WEB DEVELOPMENT</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-solid fa-signal"></i>
                                </div>
                                <h4 class="pt-4 pb-1">PHOTOGRAPHY</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-solid fa-glasses"></i>
                                </div>
                                <h4 class="pt-4 pb-1">RESPONSIVE DESIGN</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-regular fa-sun"></i>
                                </div>
                                <h4 class="pt-4 pb-1">GRAPHIC DESIGN</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-4 service-card">
                            <div class="text-center bg-white rounded-2 p-4 shadow-sm">
                                <div class="service-icon d-flex justify-content-center align-items-center m-auto">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <h4 class="pt-4 pb-1">MARKETING SERVICES</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat!
                                    Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
}
