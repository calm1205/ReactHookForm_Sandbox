import React from "react";
import { useFormContext } from "react-hook-form";

export default () => {
  const { clearErrors } = useFormContext();

  const onClick = () => {
    console.log("call clearErrors");
    clearErrors("name.family");
  };
  return <button children={"clear error"} onClick={onClick} />;
};
