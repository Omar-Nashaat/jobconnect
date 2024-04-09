import React from 'react'
import style from './Login.module.css'

export default function Login() {

  return <>

    <div className="container mt-4 w-50 text-white">

      <h3 className='mb-3'>Login :</h3>
      <form>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div>
          <button className={style.submitBtn + ' btn mb-5 text-white d-block ms-auto mt-3'} type='submit'>
            Login
          </button>
        </div>
      </form>

    </div>
  </>
}
