import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";
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
        <h1>コンポーネント化(useFormContext)</h1>

        <Input name={"name" as keyof Inputs} label="氏名" />
        <Input name={"age" as keyof Inputs} label="年齢" />
        <Input name={"job" as keyof Inputs} label="職業" />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
