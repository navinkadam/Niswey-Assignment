import React from "react";
import "./input.css";

export default function Input({ value, disabled, className = "", onChange }) {
  return (
    <div className="form-input-group">
      <input
        type="text"
        value={value}
        disabled={disabled}
        className={`form-input ${className}`}
        onChange={onChange}
      />
    </div>
  );
}
