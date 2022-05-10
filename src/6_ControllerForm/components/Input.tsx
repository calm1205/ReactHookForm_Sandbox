import React from "react";

type Input = {
  name: string;
  label: string;
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: () => void;
  onBlur: () => void;
};

export const Input: React.FC<Input> = ({
  name,
  label,
  value = "",
  error,
  disabled,
  onChange,
  onBlur,
}) => (
  <>
    <label>{label}</label>
    <input
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
    <span>{(disabled || error) ?? ""}</span>
    <br />
  </>
);
