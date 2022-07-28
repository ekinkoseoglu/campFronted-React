import React, { useEffect } from "react";
import { useFormik } from "formik";
import ProductService from "../services/productService";
import { toast } from "react-toastify/dist/react-toastify.cjs.production.min";

import "./AddProduct.css";

const AddProduct = () => {
  let productService = new ProductService();

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      productName: "",
      unitsInStock: "",
      unitPrice: "",
    },
    onSubmit: (values) => {
      productService
        .addProduct(values)
        .then((response) => {
          toast.success(`${values.productName} added to cart`);
        })
        .catch((error) => toast.error(`${error.response.data.message}`));

      console.log("Product Added");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="categoryId">Category ID</label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryId}
          />
        </div>

        <div className="form-control">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="unitsInStock">Units In Stock</label>
          <input
            type="text"
            id="unitsInStock"
            name="unitsInStock"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unitsInStock}
          />
        </div>
        <div className="form-control">
          <label htmlFor="unitPrice">Unit Price</label>
          <input
            type="text"
            id="unitPrice"
            name="unitPrice"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unitPrice}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
