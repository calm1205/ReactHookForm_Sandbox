import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Input = {
  register: UseFormRegisterReturn;
  label: string;
  error?: string;
};

export const Input: React.FC<Input> = ({ register, label, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...register} />
      <span>{error}</span>
    </div>
  );
};
