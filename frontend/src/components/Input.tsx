import React from "react";

interface InputProps {
  handleChange: any;
  placeholder: string;
  name: string;
  value: string;
}
export const Input: React.FC<InputProps> = ({
  handleChange,
  placeholder,
  name,
  value,
}) => {
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
};
