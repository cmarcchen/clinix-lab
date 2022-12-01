import React from "react";
export function Input({ handleChange, placeholder, name, value }) {
  return (
    <label className="mr-2">
      {placeholder}
      <input
        className="border"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
