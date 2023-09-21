import React from "react";
import "../../styles/icons.css";

function AdditionalActions() {
  return (
    <div className="additional-actions-container">
      <button>
        <span className="icon icon-heart-fill" />
      </button>
      <button>
        <span className="icon icon-bar-chart" />
      </button>
    </div>
  );
}

export default AdditionalActions;
