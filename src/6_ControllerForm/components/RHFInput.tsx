import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./Input";

type RHFInput<T> = {
  name: keyof T & string;
  label: string;
};

/**
 * Genericsのオブジェクトのキーでname属性を制限
 */
export const RHFInput = <T extends { [key: string]: unknown }>(
  props: RHFInput<T>
) => {
  return (
    <Controller
      name={props.name}
      rules={{ required: `${props.label}は必須です。` }}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { error },
      }) => (
        <Input
          name={name}
          value={value}
          label={props.label}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
