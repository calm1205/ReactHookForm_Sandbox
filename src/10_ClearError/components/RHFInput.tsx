import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./Input";

type RHFInput = {
  name: string;
  label: string;
  defaultValue?: string;
};

export const RHFInput: React.FC<RHFInput> = ({
  name,
  label,
  defaultValue = "",
}) => {
  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      defaultValue={defaultValue}
      shouldUnregister
      render={({ field: { onChange, onBlur, value, name } }) => (
        <Input
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
