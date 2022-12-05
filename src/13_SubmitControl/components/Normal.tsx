import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useSwitch } from "../hooks/useSwitch";
import { Switch } from "./Switch";

type Field = {
  data1: string;
};

/**
 * Submit制御
 */
export const Normal: React.FC = () => {
  const methods = useForm<Field>({ shouldUnregister: false });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Field> = (input) => {
    console.log("collect data is:", input);
  };
  console.log("errors: ", errors);

  const { check, toggleCheck } = useSwitch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>shouldUnregister: false</h3>

        <Switch label="表示/非表示" checked={check} onChange={toggleCheck} />

        {check && <input {...register("data1", { required: true })} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
