import "../../styles/common.css";
import "../../styles/icons.css";
import React, { useEffect, useState } from "react";
import { secondsToHMS } from "../../utils/countdown";

function SalePoints({ secondLeftNextDelivery = 3648 }) {
  const [secondsLeft, setTimeLeft] = useState(secondLeftNextDelivery);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft === 0) {
        clearInterval(interval);
      }
      setTimeLeft((leftSeconds) => leftSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="sale-points-container">
      <ol className="list-with-icons">
        <li>
          <span className="bullet-point icon-van" />
          <p>
            Order in the next <strong>{secondsToHMS(secondsLeft)}</strong> for
            delivery on <strong>3rd March</strong>
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
