import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { NestedInput } from "./NestedInput";
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
        <h1>コンポーネント化</h1>

        <NestedInput name={"name"} label={"氏名"} />
        <NestedInput name={"age"} label={"年齢"} />
        <NestedInput name={"job"} label={"職業"} />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
