import { ErrorMessage } from "@hookform/error-message";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./components/RHFInput";

type Fields = {
  name: {
    family: string;
    middle: string;
    first: string;
  };
};

export default () => {
  const methods = useForm<Fields>({ mode: "onBlur", reValidateMode: "onBlur" });
  const { handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit: SubmitHandler<Fields & { state?: unknown }> = (input) => {
    console.log("collect data is:", input);
    console.log("mount fields data is:", input.name);
    console.log("state data is:", input.state);
  };

  console.log("errors:", errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ErrorMessage</h1>

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
    </FormProvider>
  );
};
