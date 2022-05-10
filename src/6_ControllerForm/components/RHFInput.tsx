import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./Input";

type RHFInput<T> = {
  name: keyof T & string;
  label: string;
  disabled?: boolean;
};

/**
 * Genericsのオブジェクトのキーでname属性を制限
 */
export const RHFInput = <T extends { [key: string]: unknown }>({
  name,
  label,
  disabled,
}: RHFInput<T>) => {
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
