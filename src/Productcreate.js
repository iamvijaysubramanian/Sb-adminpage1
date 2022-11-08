import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';

function Productcreate() {
    const formik =useFormik({
        initialValues: {
            name: "",
            image: "",
            price: "",
          },
          onSubmit: async (values) => {
            try {
              const products= await axios.post(
                "https://634d63a6acb391d34a9c1ad0.mockapi.io/product",
                values
              );
              alert("Success");
            } catch (error) {
              alert("Error");
            }
          },
        });
    
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Productname</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.errors.name ? "error-box" : ""
                } ${
                  formik.touched.name && !formik.errors.name ? "success-box" : ""
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Image</label>
              <input
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                type={"text"}
                className={`form-control ${
                    formik.errors.image ? "error-box" : ""
                  } ${
                    formik.touched.image && !formik.errors.image ? "success-box" : ""
                  }`}
              />
              {formik.touched.image && formik.errors.image ? (
                <span style={{ color: "red" }}>{formik.errors.image}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Price</label>
              <input
                name="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                type={"text"}
                className={`form-control ${
                    formik.errors.price ? "error-box" : ""
                  } ${
                    formik.touched.price && !formik.errors.price ? "success-box" : ""
                  }`}
              />
              {formik.touched.price && formik.errors.price ? (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
          </div>
          </form>
          </div>
          );
}

export default Productcreate;