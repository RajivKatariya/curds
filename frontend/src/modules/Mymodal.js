import React from "react"


export function Loginmodal() {
    return (
        <div className="modal fade" id="loginpage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                        {/* login page start */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" />
                                    <div className="form-text"> filed required</div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                    <div className="form-text"> filed required</div>
                                   
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                    <div className="modal-footer">
                       
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancle</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}