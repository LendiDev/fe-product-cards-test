import "../../styles/common.css";
import "../../styles/icons.css";
import React from "react";

function SalePoints() {
  return (
    <div className="sale-points-container">
      <ol className="list-with-icons">
        <li>
          <span className="bullet-point icon-van" />
          <p>
            Order in the next <strong>3:04:27</strong> for delivery on{" "}
            <strong>3rd March</strong>
          </p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>FREE UK delivery</p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>PayPal credit available</p>
        </li>
      </ol>
    </div>
  );
}

export default SalePoints;
