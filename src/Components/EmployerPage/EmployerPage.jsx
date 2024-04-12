import React from 'react'

export default function EmployerPage() {
    return <>
        <h1 className='text-white text-center'>Posted Jobs Table</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table class="table table-striped table-dark table-hover mt-4 text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Action</th> </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td className='text-center'>Front end developer</td>
                                <td>
                                    <button className='btn btn-success me-2'>View Job Details</button>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        Review Proposals
                                    </button>

                                    {/* start Review Proposals modal */}
                                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content bg-dark text-white">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Jobs Proposals</h1>
                                                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <table class="table table-dark mt-4 text-center">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">CV</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Mark</td>
                                                                <td><button className='btn btn-info'><i class="fa-solid fa-file"></i></button></td>
                                                                <td>
                                                                    <button className='btn btn-success me-2'><i class="fa-solid fa-check"></i></button>
                                                                    <button className='btn btn-danger'><i class="fa-solid fa-xmark"></i></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td><button className='btn btn-info'><i class="fa-solid fa-file"></i></button></td>
                                                                <td>
                                                                    <button className='btn btn-success me-2'><i class="fa-solid fa-check"></i></button>
                                                                    <button className='btn btn-danger'><i class="fa-solid fa-xmark"></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end Review Proposals modal */}

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Back end developer</td>
                                <td>
                                    <button className='btn btn-success me-2'>View Job Details</button>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        Review Proposals
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* start post job modal */}
                    <button type="button" class="btn btn-primary d-block m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Post New Job
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark text-white">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Post New Job</h1>
                                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="col-md-12">
                                            <label for="inputName" class="form-label">Job Title</label>
                                            <input type="text" class="form-control mb-1" id="inputName" placeholder="Front-end developer ..." required input />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label">Job Description</label>
                                            <textarea class="form-control mb-1" id="exampleFormControlTextarea1" rows="3" placeholder='Description..'></textarea>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputState" class="form-label input-color">Job Type</label>
                                            <select id="inputState" class="form-select mb-1">
                                                <option>Full Time</option>
                                                <option>Part Time</option>
                                                <option>Remote</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputState" class="form-label input-color">Salary Range</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Salary Range</option>
                                                <option value="1">100$ - 300$</option>
                                                <option value="2">300$ - 600$</option>
                                                <option value="3">600$ - 900$</option>
                                                <option value="4">Above 900$</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary">Post</button>
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
