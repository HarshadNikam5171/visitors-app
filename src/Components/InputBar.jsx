import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function InputBar({ label, placeholder, inputRef, type = "text" }) {
  return (
    <div className="mb-3 text-start">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        className="Form-control"
      />
    </div>
  );
}
export default InputBar;
