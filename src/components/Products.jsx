import React from "react";
import products from "../data/products";
import { Link, Switch, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Products(props) {
  const productsMap = products.map(item => (
    <div className="container">
      <p>
        <Link to={`/products/${item.id}`}>{item.title}</Link>
      </p>
    </div>
  ));

  return (
    <div className="contianer">
      <h1 className="text-center text-success py-3">Our Products</h1>
      <hr />
      {productsMap}
      <Switch>
        <Route path="/products/:productID">
          <div className="row m-0">
            <ProductDetails />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
