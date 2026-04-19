import React from "react";
import PropTypes from "prop-types";

Input.prototype = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Input({ type, placeholder, className, required, value, onChange }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
