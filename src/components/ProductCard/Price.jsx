import React from "react";

function Price({ price, discountedPrice }) {
  const priceFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(discountedPrice || price);

  let originalPriceFormatted;
  if (price) {
    originalPriceFormatted =
      "RRP" +
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(price);
  }

  let discount;
  if (price - discountedPrice > 0) {
    if (discountedPrice && price) {
      discount =
        "Save " +
        new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(price - discountedPrice);
    }
  }

  return (
    <div className="product-price-container">
      {discount && (
        <p className="old-price">
          <span className="strikethrough">{originalPriceFormatted}</span>
        </p>
      )}

      <div className="discounted-container">
        <p className={`new-price ${discount ? "discounted" : ""}`}>
          {priceFormatted}
        </p>
        {discount && <p className="save-tag">{discount}</p>}
      </div>
    </div>
  );
}

export default Price;
