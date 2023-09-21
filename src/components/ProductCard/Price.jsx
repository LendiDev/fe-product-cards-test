import React from "react";

function Price() {
  return (
    <div className="product-price-container">
      <p className="old-price">
        <span className="strikethrough">RRP £1,799.00</span>
      </p>
      <p className="new-price">£1,599.00</p>
    </div>
  );
}

export default Price;
