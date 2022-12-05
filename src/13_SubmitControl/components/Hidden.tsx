import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useSwitch } from "../hooks/useSwitch";
import { Switch } from "./Switch";

type Field = {
  data3: string;
};

/**
 * Submit制御
 */
export const Hidden: React.FC = () => {
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
        <br />
        <br />
        <br />
        <hr />
        <h3>hidden</h3>
        <p>
          - 非表示でもデータ保持
          <br />- 非表示でもバリデーション発火
        </p>

        <Switch checked={check} onChange={toggleCheck} />

        <div hidden={!check}>
          <input {...register("data3", { required: true })} />
        </div>

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
