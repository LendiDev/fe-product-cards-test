import React from "react";
import Reviews from "./Reviews";
import PreviewThumbnail from "./PreviewThumbnail";
import ShortDescription from "./ShortDescription";
import Price from "./Price";
import StockLimit from "./StockLimit";
import SalePoints from "./SalePoints";
import RecommendedBadge from "./RecommendedBadge";
import Header from "./Header";
import AddToBasketButton from "./AddToBasketButton";
import AdditionalActions from "./AdditionalActions";

function ProductCard({
  isFeatured,
  isLowStock,
  stockPercent,
  rating,
  totalReviews,
  orderInSeconds,
}) {
  const isOutOfStock = stockPercent === 0;
  const featuredClass = isFeatured ? "featured" : "";

  const onAddToBasketHandler = () => {
    alert("Add To Basket has been called!");
  };

  return (
    <article className={`product-card ${featuredClass}`}>
      {isFeatured && <RecommendedBadge />}
      <div className="product-details">
        <div className="product-card-header">
          <Header title='LG OLED65BX6LB 65" 4K OLED Smart TV - A Energy Rated' />
          <Reviews rating={rating} totalReviews={totalReviews} />
        </div>
        <PreviewThumbnail />
        <ShortDescription />
        <AdditionalActions />
      </div>
      <div className="sale-point">
        <Price isFeatured={isFeatured} />
        <StockLimit isLowStock={isLowStock} inStockPercent={stockPercent} />
        <SalePoints secondLeftNextDelivery={orderInSeconds} />
        <AddToBasketButton
          action={onAddToBasketHandler}
          isOutOfStock={isOutOfStock}
        />
      </div>
    </article>
  );
}

export default ProductCard;
