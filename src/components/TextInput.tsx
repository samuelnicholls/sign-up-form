import React, { FC, ChangeEvent }  from "react";

export type TextInputProps = {
  id: string;
  value: string;
  label: string;
  name: string; 
  placeholder?: string;
  type: "text" | "email" | "password";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const TextInput: FC<TextInputProps> = ({ id, value, label, name, placeholder, type, onChange, error }) => {
  return (
    <div>
      {label && <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900 ${error && "text-red-600"}`}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${error && "border-red-500 placeholder-red-700"}`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )

}

export default TextInput