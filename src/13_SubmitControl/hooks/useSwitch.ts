import { useCallback, useState } from "react";

/**
 * checkboxの制御
 */
export const useSwitch = () => {
  const [check, setCheck] = useState(true);
  const toggleCheck = useCallback(() => setCheck(!check), [check]);

  return {
    check,
    toggleCheck,
  };
};
