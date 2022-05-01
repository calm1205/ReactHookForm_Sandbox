import React, { ChangeEventHandler, useCallback } from "react";

type Input = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Input> = ({ label, checked, onChange }) => {
  return (
    <>
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
      <br />
    </>
  );
};
