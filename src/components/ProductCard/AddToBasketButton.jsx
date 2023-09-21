import React from "react";
import Button from "../ui/Button";

function AddToBasketButton({ action, isOutOfStock }) {
  const title = isOutOfStock ? "Out of stock" : "Add to basket";

  return (
    <div style={{ marginTop: 10 }}>
      <Button
        disabled={isOutOfStock}
        icon={!isOutOfStock && "icon-cart"}
        onClick={action}
        title={title}
      />
    </div>
  );
}

export default AddToBasketButton;
