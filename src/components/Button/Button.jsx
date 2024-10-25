import React from "react";

const Button = ({ label, style = {}, ...props }) => {
  return (
    <button
      {...props}
      style={{
        ...style,
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "lightgray",
        border: "none",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;