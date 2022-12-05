import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Input = {
  name: string;
  label: string;
};

export const Input: React.FC<Input> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const requiredValidation: RegisterOptions = {
    required: `${label}は必須です。`,
  };

  return (
    <div>
      <label>{label}</label>
      <input {...register(name, requiredValidation)} />
      <span>{`${errors[name]?.message}`}</span>
    </div>
  );
};
