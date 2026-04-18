import React from "react";
import PropTypes from "prop-types";

Button.prototype = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

function Button({ disabled, onClick, children, type }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-primary disabled:bg-primary/50 p-3 text-background rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
