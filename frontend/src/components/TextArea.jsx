import React from "react";
export function TextArea({ handleChange, placeholder, value, name }) {
  return (
    <label>
      {placeholder}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </label>
  );
}
