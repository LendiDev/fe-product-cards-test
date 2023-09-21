import "../../styles/common.css";
import React from "react";

function ShortDescription() {
  return (
    <div className="short-description">
      <ol className="list-with-icons">
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>Self-lit pixels</p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>α7 Gen3 Intelligent Processor 4K</p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>Transform your TV into a central hub with ThinQ AI</p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>Dolby Vision IQ & Dolby Atmos</p>
        </li>
        <li>
          <span className="bullet-point icon-bullet-point" />
          <p>2 year warranty</p>
        </li>
      </ol>
    </div>
  );
}

export default ShortDescription;
