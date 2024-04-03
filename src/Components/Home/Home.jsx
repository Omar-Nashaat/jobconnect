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
                <div className="jobsCards mt-4">
                    <JobsSlider />
                </div>
                <div>
                    <button className={style.showMoreBtn + ' btn d-block m-auto mt-5'}>Show More Jobs</button>
                </div>
            </div>
        </div>
    </>
}
