import React from "react";

interface TextAreaProps {
  handleChange: any;
  placeholder: string;
  value: string;
  name: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  handleChange,
  placeholder,
  value,
  name,
}) => {
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
};
