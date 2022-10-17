import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';


function Usercreate() {
    const formik = useFormik({
        initialValues : {
            name :"",
            email :"",
            country:"",
            state:"",
            city:"",
            phone:"",
            dob:"",
            gender:"",
        },
        onSubmit:async(values)=>{
            try {
               const userdata= await axios.post("https://634d63a6acb391d34a9c1ad0.mockapi.io/user",values);
               alert("Success")
            } catch (error) {
                alert("Error")
            }
        },
    });
  return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Username</label>
                    <input name='name' onChange={formik.handleChange}value={formik.values.name}type={"text"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <label>Email</label>
                    <input name='email' onChange={formik.handleChange}value={formik.values.email}type={"text"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <label>Country</label>
                    <select name='country' onChange={formik.handleChange}value={formik.values.country} className='form-control'>
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
                    <select name='state' onChange={formik.handleChange}value={formik.values.state} className='form-control'>
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
                    <select name='city' onChange={formik.handleChange}value={formik.values.city} className='form-control'>
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
                    <input name='phone' onChange={formik.handleChange}value={formik.values.phone} type={"number"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <label>Dob</label>
                    <input name='dob' onChange={formik.handleChange}value={formik.values.dob}type={"Date"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <label>Gender</label>
                    <select name='gender' onChange={formik.handleChange}value={formik.values.gender} className="form-control">
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
        </form>
    </div>
  )
}

export default Usercreate