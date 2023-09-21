import React from "react";
import productThumbnailImage from "../../assets/images/product/preview-thumbnail.png";
import productBrandImage from "../../assets/images/product/brand-logo.png";

function PreviewThumbnail() {
  return (
    <div className="preview-thumbnail">
      <div>
        <img
          src={productThumbnailImage}
          className="preview"
          alt={"lg oled 65 inch preview"}
        />
      </div>
      <div>
        <img
          src={productBrandImage}
          className="brand-logo"
          alt={"lg brand logo"}
        />
      </div>
    </div>
  );
}

export default PreviewThumbnail;
