import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Regsiter.module.css'



export default function Register() {

  return <>

    <div className="container mt-4 w-50 text-white">

      <h3 className='mb-3'>Register Now :</h3>
      <form>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">Name :</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="form-label">Phone :</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-2">
          <label htmlFor="rePassword" className="form-label">Repassword :</label>
          <input type="password" className="form-control" id="rePassword" />
        </div>
        <div>
          <button className={style.submitBtn + ' btn mb-5 text-white d-block ms-auto mt-3'} type='submit'>
            Submit
          </button>
        </div>
      </form>

    </div>
  </>
}