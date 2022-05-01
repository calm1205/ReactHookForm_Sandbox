import React from "react";
import { useFormContext } from "react-hook-form";

type Input = {
  name: string;
  label: string;
};

export const NestedInput: React.FC<Input> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input {...register(name, { required: `${label}は必須です。` })} />
      <span>{errors[name]?.message}</span>
    </div>
  );
};
