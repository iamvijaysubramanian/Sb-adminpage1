import React from 'react'

function Edituser() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Username</label>
                <input type={"text"} className="form-control"/>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Email</label>
                <input type={"text"} className="form-control"/>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Country</label>
                <select className='form-control'>
                    <option value="">select</option>
                    <option value="IN">India</option>
                    <option value="US">America</option>
                    <option value="CH">china</option>
                    <option value="UK">United Kingdom</option>
                    <option value="JP">Japan</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>State</label>
                <select className='form-control'>
                    <option value="">select</option>
                    <option value="IN">India</option>
                    <option value="US">America</option>
                    <option value="CH">china</option>
                    <option value="UK">United Kingdom</option>
                    <option value="JP">Japan</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>City</label>
                <select className='form-control'>
                    <option value="">select</option>
                    <option value="IN">India</option>
                    <option value="US">America</option>
                    <option value="CH">china</option>
                    <option value="UK">United Kingdom</option>
                    <option value="JP">Japan</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Phone</label>
                <input type={"number"} className="form-control"/>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Dob</label>
                <input type={"Date"} className="form-control"/>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Gender</label>
                <select className="form-control">
                <option>select</option>   
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <input type={"submit"} className="btn btn-primary"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Edituser