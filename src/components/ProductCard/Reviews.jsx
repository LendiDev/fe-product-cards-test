import { v4 as uuid } from "uuid";

import React from "react";

function Reviews({ rating, totalReviews = 0 }) {
  const reviewsWord = totalReviews === 1 ? "Review" : "Reviews";

  const Stars = () => {
    const starsArray = [];

    for (let i = 0; i < 5; i++) {
      const classNameCSS = i >= rating ? "light" : null;

      starsArray.push(
        <span
          key={uuid()}
          className={`icon-star ${classNameCSS}`}
          alt="Rating star"
        />
      );
    }

    return starsArray;
  };

  return (
    <div className="product-card-reviews">
      <div className="stars">
        <Stars />
      </div>
      <p>
        {totalReviews} {reviewsWord}
      </p>
    </div>
  );
}

export default Reviews;
