import React from "react";

const Product = (props) => {
  const { id , productsName, price, productsImage } = props.data;

  return (
    <div className="product">
      <img src={productsImage} alt="product" />
      <div className="description">
        <p>
          <b>{productsName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn ">Add to Cart</button>
    </div>
  );
};

export default Product;
