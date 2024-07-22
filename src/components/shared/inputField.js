import React from "react";

function InputField({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-4 my-4 w-full bg-gray-700 rounded-lg"
    />
  );
}

export default InputField;
