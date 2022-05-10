import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ClearError from "./components/clearError";
import { RHFInput } from "./components/RHFInput";

type NameFields = {
  name: {
    family: string;
    middle: string;
    first: string;
  };
};

export default () => {
  const methods = useForm<NameFields>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<NameFields> = (input) => {
    console.log("collect data is:", input);
  };

  console.log("errors is : ", errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ClearError</h1>

        <RHFInput name="name.family" label="性" />
        <ErrorMessage errors={errors} name="name.family" />
        <br />

        <RHFInput name="name.middle" label="ミドル" defaultValue="C" />
        <ErrorMessage errors={errors} name="name.middle" />
        <br />

        <RHFInput name="name.first" label="名" />
        <ErrorMessage errors={errors} name="name.first" />
        <br />

        <input type="submit" />
      </form>

      <ClearError />
    </FormProvider>
  );
};
