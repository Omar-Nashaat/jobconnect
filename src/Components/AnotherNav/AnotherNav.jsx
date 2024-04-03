import React from 'react'
import style from './AnotherNav.module.css'

export default function AnotherNav() {
    return <>
        <nav className={style.navbar + " navbar navbar-expand-lg p-3"}>
            <div className="container w-75">
                <a className="navbar-brand text-white" href="#">
                    <i className="fa-solid fa-dove fa-xl pe-2" style={{ color: 'white' }} />
                    FindPlus
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={style.navBtn} aria-current="page" href="#"><i class="fa-solid fa-city pe-2"></i>I'm Hiring</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}
