import React from "react";
import PRODUCTS from "../../components/productsApi";
import Product from "./Product";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ParthTech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((prod) => (
          <Product data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
