import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

/**
 * unregisterされてもstateの名前空間で値を保持
 * @param name inputのname属性
 */
export const useHoldValueAsState = (name: string) => {
  const { setValue, getValues } = useFormContext();
  const stateName = `state.${name}`;

  // formがunmount時はinputに直接含めない。
  useEffect(() => {
    const stateValue = getValues(stateName);
    if (stateValue) setValue(name, stateValue);

    return () => setValue(stateName, getValues(name)); // unmount時にstateにセット
  }, []);
};
