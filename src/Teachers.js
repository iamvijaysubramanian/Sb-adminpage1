import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Teachers() {
  const [teachers,setTeachers]= useState([]);
  const [isLoading,setLoading]=useState(false);
  useEffect(()=>{
    fetchData()
  },[])

  let fetchData = async () => {
    try{
      setLoading(true)
      const teachers= await axios.get("https://634d63a6acb391d34a9c1ad0.mockapi.io/teachers")
      setTeachers(teachers.data)
      setLoading(false)
    }catch(error){
     alert("error")
    }
  }

  let deleteTeacher= () => {
    const result=window.confirm("Are you sure do you want to delete")
      if(result){
        alert("Deleted")
      }
    }
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teachers</h1>
        <Link
          to={"/portal/teachers/teacher_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Teacher{" "}
        </Link>
      </div>
      {
        isLoading ? <span>Loading...</span> : <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              // cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Teachername</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Phone</th>
                  <th>Dob</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>ID</th>
                  <th>Teachername</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Phone</th>
                  <th>Dob</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {teachers.map((teacher)=>{
                  return <tr>
                  <td>{teacher.id}</td>
                  <td>{teacher.teachername}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.class}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.dob}</td>
                  <td>{teacher.gender}</td>
                  <td>{teacher.address}</td>
                  <td>
                    <Link to={`teacher/${teacher.id}`}className="btn btn-primary mr-2 md-2">Profile </Link>
                    <Link to={`edit/${teacher.id}`} className="btn btn-warning mr-2">Edit</Link>
                    <button onClick={() => deleteTeacher()} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      }
    </div>
  );
}


export default Teachers