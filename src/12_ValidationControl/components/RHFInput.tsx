import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./Input";

type RHFInput = {
  name: string;
  label: string;
  disabled?: boolean;
};

export const RHFInput: React.FC<RHFInput> = ({ name, label, disabled }) => {
  const validation = disabled ? {} : { required: `${label}は必須です。` };

  return (
    <Controller
      name={name}
      rules={validation}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { error },
      }) => (
        <Input
          name={name}
          value={value}
          disabled={disabled}
          label={label}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
