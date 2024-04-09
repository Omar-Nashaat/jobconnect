import React from 'react'
import style from './AnotherHome.module.css'
import JobsSlider from '../JobsSlider/JobsSlider'

export default function AnotherHome() {
    return <>

        {/* start home */}
        <div id='home'>
            <div className="container">
                <div className="row">
                    <div className="mt-5">
                        <div className={style.mainText + " col-md-12 mb-4"}>
                            <i className="fa-solid fa-dove fa-2xl pe-2 mb-3 mt-4" style={{ color: 'white' }} />
                            <h1>FindPlus</h1>
                            <div className={style.yellowLine + " mb-4"}></div>
                            <div>
                                <h2 className='fw-light'>Local <span className='fw-bold'>Jobs</span> for the skilled and talented in Africa</h2>
                                <h6 className='fw-light'><span className='fw-bold'>Powerd</span> by Fleet Labs Ghana</h6>
                            </div>
                        </div>
                        <JobsSlider />
                        <button className={style.moreBtn + ' btn d-block m-auto mt-3 d-flex'}>
                            <div>Show More Jobs</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* end home */}

        {/* start join */}
        <div id='join' className={style.join}>
            <div className="container w-75">
                <h1 className='text-white text-center'>Join Us</h1>
                <div className={style.yellowLine + " mb-4"}></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className={style.findJob}>
                            <h2>Find a Job</h2>
                            <p>Finding job opportunity enhances your visibility and captivates potential employers. Such roles stand out amidst the sea of listings, often enjoying extra exposure across various platforms like social media.</p>
                            <div>
                                <button className={style.joinBtn + ' btn mt-4'}>Find a job</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={style.postJob}>
                            <h2>Post a Job</h2>
                            <p>Posting a free job listing is budget-friendly and reaches a large pool of job seekers, offering a cost-effective solution for filling positions with qualified candidates. It can also help build a talent pipeline for future job openings.</p>
                            <div>
                                <button className={style.postBtn + ' btn mt-4'}>Post a job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end join */}

        {/* start footer */}
        <div id='footer'>
            <div className="container">
                <div className={style.upperFooterContent}>
                    <h5>Hiring for multiple roles?</h5>
                    <h5>Save time and effort with over +5 job offers , chat with us to enquire more</h5>
                    <div className={style.whiteLine + " mt-3"}></div>
                </div>
                <div className={style.lowerFooterContent}>
                    <div className="d-flex">
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-dove fa-2xl pe-2 mb-3 mt-4" style={{ color: 'white' }} />
                            <h5 className='mt-3'>FindPlus</h5>
                        </div>
                        <p className={style.footerAdderss + ' mt-4'}>Nasr City , 854/12 2024 Nashaat all rights reserved</p>
                        <p className={style.footerPrivacy + ' mt-4'}>Privacy | Terms of Service</p>
                        <button className={style.chatBtn + ' btn d-block m-auto mt-3 d-flex'}>
                            <div>
                                Chat with us
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >
        {/* end footer */}
    </>
}
