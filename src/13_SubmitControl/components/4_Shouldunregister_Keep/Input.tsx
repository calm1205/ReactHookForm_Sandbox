import { useEffect } from "react";
import { useFormContext, UseFormRegisterReturn } from "react-hook-form";

type Input = {
  register: UseFormRegisterReturn;
};

/**
 * input
 */
export const Input: React.FC<Input> = ({ register }) => {
  const name = register.name;
  const { setValue, getValues } = useFormContext();
  const stateName = `state.${name}`;

  // formがunmount時はinputに直接含めない。
  useEffect(() => {
    const stateValue = getValues(stateName);
    if (stateValue !== undefined) setValue(name, stateValue);

    return () => setValue(stateName, getValues(name)); // unmount時にstateにセット
  }, [getValues, name, setValue, stateName]);

  return <input {...register} />;
};
