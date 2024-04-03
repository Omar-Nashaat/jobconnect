import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {

    let nav = useNavigate();

    //   function logOut() {
    //     localStorage.removeItem("tkn")
    //     setToken(null)
    //     nav("/login")
    //   }


    return <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to={'home'}>
                    <i className="fa-solid fa-dove fa-xl pe-2" style={{ color: '#fa4d04' }} />
                    Find<span style={{ color: '#fa4d04' }}>Plus</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item pt-2">
                            <Link className="nav-link" aria-current="page" to={'home'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'home'}>
                                <button className='btn text-white' style={{ background: '#fa4d04' }}>
                                    Find Job
                                </button>
                            </Link>
                        </li>
                    </ul>

                </div>
                <ul className='ms-auto navbar-nav align-items-center gap-1'>
                    <li className="nav-item position-relative">
                        <Link className="nav-link" aria-current="page" to={'cart'}><i class="fa-solid fa-bookmark fa-xl"></i></Link>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            4
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to={'login'}>
                            <button className='btn text-white' style={{ background: "#2F4858" }}>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to={'login'}>
                            <button className='btn text-white' style={{ background: "#2F4858" }}>
                                Register
                            </button>
                        </Link>
                    </li>
                        
                    {/* <li className="nav-item">
                        <button className="nav-link">SignOut</button>
                    </li> */}
                    <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'home'}>
                                <button className='btn text-white' style={{ background: '#fa4d04' }}>
                                    SignOut
                                </button>
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>


    </>
}
