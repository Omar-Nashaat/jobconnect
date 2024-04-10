import React from 'react'

export default function AdminPage() {
    return <>
        <h1 className='text-white text-center'>Employers Table</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table class="table table-striped table-dark table-hover mt-4 text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th> </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark Otto</td>
                                <td>
                                    <button className='btn btn-success me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob Thornton</td>
                                <td>
                                    <button className='btn btn-success me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>
                                    <button className='btn btn-success me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry the Bird</td>
                                <td>
                                    <button className='btn btn-success me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob Thornton</td>
                                <td>
                                    <button className='btn btn-success me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="button" class="btn btn-primary d-block m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create New Employer
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark text-white">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create New Employer</h1>
                                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Employer Name :</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
