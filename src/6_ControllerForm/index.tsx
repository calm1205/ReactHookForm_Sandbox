import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./components/RHFInput";
import { Inputs } from "~/Types";

export default () => {
  const methods = useForm<Inputs>({ reValidateMode: "onBlur" });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = (input) => {
    console.log("submit data is:", input);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>コンポーネント化(controller)</h1>

        <RHFInput<Inputs> name="name" label="氏名" />
        <RHFInput<Inputs> name="age" label="年齢" />
        <RHFInput<Inputs> name="job" label="職業" />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
