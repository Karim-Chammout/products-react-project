import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails(props) {
  const { productID } = useParams();
  const product = products.filter(item => item.id === Number(productID));

  return (
    <div className="col-9 col-md-4 mt-4">
      <div className="card bg-dark">
        <img src={product[0].img} className="card-img-top w-100" alt="" />
        <div className="card-body">
          <h5 className="card-title text-primary">{product[0].title}</h5>
          <p className="card-text text-danger">{product[0].details}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
