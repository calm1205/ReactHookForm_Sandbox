import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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

  const { handleSubmit, setFocus } = methods;

  React.useEffect(() => {
    setFocus("name.family");
  }, [setFocus]);

  const onSubmit: SubmitHandler<NameFields> = (input) => {
    console.log("collect data is:", input);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Set Focus</h1>

        <RHFInput name="name.family" label="性" />
        <br />

        <RHFInput name="name.middle" label="ミドル" defaultValue="C" />
        <br />

        <RHFInput name="name.first" label="名" />
        <br />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
