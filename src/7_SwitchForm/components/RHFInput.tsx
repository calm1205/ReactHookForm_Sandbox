import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";
import { useHoldValueAsState } from "../hooks/useHoldValueAsState";

type RHFInput = {
  name: string;
  label: string;
  defaultValue?: string;
};

/**
 * RHFのinput
 */
export const RHFInput: React.FC<RHFInput> = ({
  name,
  label,
  defaultValue = "",
}) => {
  // unregister時にvalueを逃がす
  useHoldValueAsState(name);

  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      defaultValue={defaultValue}
      shouldUnregister // useFormで全体に適応ではなく個別設定
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { error }, // useFormContextの値は参照しない
      }) => (
        <Input
          name={name}
          value={value}
          label={label}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
