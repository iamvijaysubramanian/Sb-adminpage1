import React from "react";
import Card from "./Card";

function Dashboard(setCounter,counter) {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <button
          onClick={()=> setCounter(counter+1)}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </button>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
