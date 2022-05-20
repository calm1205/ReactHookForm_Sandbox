import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";

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
  const { setValue, getValues } = useFormContext();
  const stateName = `state.${name}`;

  // formがunmount時はinputに直接含めない。
  useEffect(() => {
    const stateValue = getValues(stateName);
    if (stateValue) setValue(name, stateValue);

    return () => setValue(stateName, getValues(name)); // unmount時にstateにセット
  }, []);

  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      defaultValue={defaultValue}
      shouldUnregister // useFormで全体に適応ではなく個別設定
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { error },
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
