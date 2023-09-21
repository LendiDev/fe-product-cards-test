import "../../styles/icons.css";
import React from "react";

function Button({ icon, onClick, title, disabled = false }) {
  const Icon = () => {
    if (icon) {
      return (
        <span
          className={icon}
          style={{ width: "1.2rem", height: "1.2rem", marginRight: "1.5rem" }}
        />
      );
    }
    return null;
  };

  return (
    <button disabled={disabled} className="btn" onClick={onClick}>
      <Icon />
      {title}
    </button>
  );
}

export default Button;
