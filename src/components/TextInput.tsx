import React, { FC, ChangeEvent }  from "react";

export type TextInputProps = {
  id: string;
  value: string;
  label: string;
  name: string; 
  placeholder?: string;
  type: "text" | "email" | "password";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errors?: any;
};

const TextInput: FC<TextInputProps> = ({ id, value, label, name, placeholder, type, onChange }) => {
  const inputError = false
  return (
    <div>
      {label && <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900 ${inputError && "text-red-600"}`}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputError && "border-red-500 placeholder-red-700"}`}
      />
      {inputError && <p className="mt-2 text-sm text-red-600">{inputError}</p>}
    </div>
  )

}

export default TextInput