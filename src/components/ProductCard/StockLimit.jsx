import React from "react";

function StockLimit({ isLowStock = false, inStockPercent = 100 }) {
  let stockText = isLowStock ? "Last few left" : "In stock";
  const lowStockClass = isLowStock ? "lowstock" : undefined;
  const lowStockStyle = {
    width: `${inStockPercent}%`,
  };

  if (inStockPercent === 0) {
    stockText = "Out of stock";
  }

  return (
    <div className="stock-limit-container">
      <div className="progress-bar">
        <span
          className={`progress ${lowStockClass}`}
          style={lowStockStyle}
        ></span>
      </div>
      <p className="stock-text">{stockText}</p>
    </div>
  );
}

export default StockLimit;
