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

function ProductCard({
  isFeatured,
  isLowStock,
  stockPercent,
  rating,
  totalReviews,
}) {
  const isOutOfStock = stockPercent === 0;
  const featuredClass = isFeatured ? "featured" : undefined;

  const onAddToBasketHandler = () => {
    alert("Add To Basket has been called!");
  };

  return (
    <article className={`product-card ${featuredClass}`}>
      {isFeatured && <RecommendedBadge />}
      <Header title='LG OLED65BX6LB 65" 4K OLED Smart TV - A Energy Rated' />
      <Reviews rating={rating} totalReviews={totalReviews} />
      <PreviewThumbnail />
      <ShortDescription />
      <Price />
      <StockLimit isLowStock={isLowStock} inStockPercent={stockPercent} />
      <SalePoints />
      <AddToBasketButton
        action={onAddToBasketHandler}
        isOutOfStock={isOutOfStock}
      />
    </article>
  );
}

export default ProductCard;
