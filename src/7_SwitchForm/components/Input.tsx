import React from "react";

type Input = {
  name: string;
  label: string;
  value: string;
  error?: string;
  onChange: () => void;
  onBlur: () => void;
};

export const Input: React.FC<Input> = ({
  name,
  label,
  value = "",
  error,
  onChange,
  onBlur,
}) => (
  <>
    <label>{label}</label>
    <input value={value} name={name} onChange={onChange} onBlur={onBlur} />
    <span>{error ?? ""}</span>
  </>
);
