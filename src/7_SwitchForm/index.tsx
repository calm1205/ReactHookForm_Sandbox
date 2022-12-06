import React, { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./components/RHFInput";
import { Switch } from "./components/Switch";

type Fields = {
  name: {
    family: string;
    middle: string;
    first: string;
  };
};

export default () => {
  const methods = useForm<Fields>({ mode: "onBlur", reValidateMode: "onBlur" });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Fields & { state?: unknown }> = (input) => {
    console.log("collect data is:", input);
    console.log("mount fields data is:", input.name);
    console.log("state data is:", input.state);
  };

  console.log("render");

  /**
   * checkboxの制御
   */
  const [check, setCheck] = useState(false);
  const changeCheck = useCallback(() => setCheck(!check), [check]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>コンポーネントの表示/非表示</h1>

        <Switch label="外国籍" checked={check} onChange={changeCheck} />
        <RHFInput name="name.family" label="性" />

        {check && (
          <RHFInput name="name.middle" label="ミドル" defaultValue="C" />
        )}

        <RHFInput name="name.first" label="名" />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
