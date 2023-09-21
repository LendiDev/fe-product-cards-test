import React from "react";

function Price({ isFeatured }) {
  return (
    <div className="product-price-container">
      <p className="old-price">
        <span className="strikethrough">RRP £1,799.00</span>
      </p>
      <div className="discounted-container">
        <p className="new-price">£1,599.00</p>
        {isFeatured && <p className="save-tag">Save £200</p>}
      </div>
    </div>
  );
}

export default Price;
