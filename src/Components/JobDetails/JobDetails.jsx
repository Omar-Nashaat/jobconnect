import React from 'react'
import style from './JobDetails.module.css'

export default function JobDetails() {
    return <>
        <div id='jobDetails'>
            <div className="container w-50">
                {/* <h2 className='text-black'>Job Details</h2> */}
                <div className={style.jobDetailsCard + " row"}>
                    <div className="col-md-11">
                        <div>
                            <h6>Recruiter : Omar Nashaat</h6>
                            <h3 className='fw-bold'>Figma Designer</h3>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className=''>
                            <i class="fa-regular fa-bookmark fs-3 pt-3"></i>
                        </div>
                    </div>
                    <div className="jobDesc mt-5">
                        <div className="col-md-12">
                            <div>
                                <h4>Job Description</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="jobSkills">
                        <div className="row">
                            <div className="col-md-7">
                                <div>
                                    <h4>Overview</h4>
                                    <button className='btn bg-white me-2'>Full time</button>
                                    <button className='btn bg-white me-2'>250$ - 400$</button>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div>
                                    <h4>Job Stats</h4>
                                    <button className='btn bg-white me-2'><span className='text-danger fw-bold'>25</span> applied</button>
                                    <button className='btn bg-white me-2'>2024-04-09</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className={style.submitBtn + ' btn mt-4 w-50 d-block m-auto p-2'}>Apply By Your CV</button> */}

                    {/* start post job modal */}
                    <button type="button" class={style.submitBtn + ' btn mt-4 w-50 d-block m-auto p-2'} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Apply By Your CV
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark text-white">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Your CV</h1>
                                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" id="inputGroupFile02" input/>
                                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end post job modal */}
                </div>
            </div>
        </div>
    </>
}