import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Products() {
  const [products,setProducts]= useState([]);
  const [isLoading,setLoading]=useState(false);
  useEffect(()=>{
    fetchData()
  },[])
  let fetchData = async () => {
    try{
      setLoading(true)
      const products= await axios.get("https://634d63a6acb391d34a9c1ad0.mockapi.io/product")
      setProducts(products.data)
      setLoading(false)
    }catch(error){
     alert("error")
    }
  }

  let deleteUser= () => {
    const result=window.confirm("Are you sure do you want to delete")
      if(result){
        alert("Deleted")
      }
    }
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
       < Link
          to={"/portal/products/product_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Create Product{" "}
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
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>ID</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map((product)=>{
                  return <tr>
                  <td>{product.id}</td>
                  <td>{product.productname}</td>
                  <td>{product.productimage}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`product/${product.id}`}className="btn btn-primary mr-2 md-2">View </Link>
                    <Link to={`edit/${product.id}`} className="btn btn-warning mr-2">Edit </Link>
                    <button onClick={() => deleteUser()} className="btn btn-danger">Delete</button>
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


export default Products;