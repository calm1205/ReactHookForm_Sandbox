import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./components/RHFInput";
import { Inputs } from "~/Types";

export default () => {
  const methods = useForm<Inputs>({ mode: "onBlur", reValidateMode: "onBlur" });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = (input) => {
    console.log("submit data is:", input);
  };

  // disable制御
  const [disabled, setDisabled] = useState(false);
  const onClick = () => setDisabled(!disabled);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>validation制御</h1>

        <button onClick={onClick}>to disabled</button>
        <p>disabled時はvalidationを設定しない。</p>
        <p>validationがないのでerrorも消える。</p>
        <br />
        <br />

        <RHFInput name="name" label="氏名" disabled={disabled} />
        <RHFInput name="age" label="年齢" disabled={disabled} />
        <RHFInput name="job" label="職業" disabled={disabled} />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
