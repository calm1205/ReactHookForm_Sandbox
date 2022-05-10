import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default () => {
  const { control } = useFormContext();

  const familyName = useWatch({ name: "name.family", control });
  /**
   * useWatchにもdefaultValueは設定が必要
   */
  const middleName = useWatch({
    name: "name.middle",
    control,
    defaultValue: "C",
  });
  const firstName = useWatch({ name: "name.first", control });

  return (
    <>
      <p>useWatch</p>
      <span>性:</span>
      {familyName}
      <br />

      <span>ミドル:</span>
      {middleName}
      <br />

      <span>名:</span>
      {firstName}
      <br />
    </>
  );
};
