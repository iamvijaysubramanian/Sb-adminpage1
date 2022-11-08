import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Students() {
  const [students,setStudents]= useState([]);
  const [isLoading,setLoading]=useState(false);
  useEffect(()=>{
    fetchData()
  },[])

  let fetchData = async () => {
    try{
      setLoading(true)
      const students= await axios.get("https://634d63a6acb391d34a9c1ad0.mockapi.io/students")
      setStudents(students.data)
      setLoading(false)
    }catch(error){
     alert("error")
    }
  }

  let deleteStudent= () => {
    const result=window.confirm("Are you sure do you want to delete")
      if(result){
        alert("Deleted")
      }
    }
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Students</h1>
        <Link
          to={"/portal/students/student_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Student{" "}
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
                  <th>Studentname</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Marks</th>
                  <th>Phone</th>
                  <th>Dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Studentname</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Marks</th>
                  <th>Phone</th>
                  <th>Dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {students.map((student)=>{
                  return <tr>
                  <td>{student.id}</td>
                  <td>{student.studentname}</td>
                  <td>{student.email}</td>
                  <td>{student.class}</td>
                  <td>{student.marks}</td>
                  <td>{student.phone}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>
                    <Link to={`student/${student.id}`}className="btn btn-primary mr-2 md-2">Profile </Link>
                    <Link to={`edit/${student.id}`} className="btn btn-warning mr-2">Edit</Link>
                    <button onClick={() => deleteStudent()} className="btn btn-danger">Delete</button>
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

export default Students;