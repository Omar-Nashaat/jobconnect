import React from 'react'
import style from './AnotherHome.module.css'
import JobsSlider from '../JobsSlider/JobsSlider'

export default function AnotherHome() {
    return <>
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
                        <div className='pe-2'>Show More Jobs</div>
                        <i class="fa-solid fa-arrow-down fa-bounce pt-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
}
