import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useSwitch } from "../../hooks/useSwitch";
import { Switch } from "../Switch";

type Field = {
  data1: string;
};

export const ShouldUnregisterFalse: React.FC = () => {
  const methods = useForm<Field>({ shouldUnregister: false });
  const { handleSubmit, register } = methods;

  const onSubmit: SubmitHandler<Field> = (input) => {
    console.log("collect data is:", input);
  };
  const onError: SubmitErrorHandler<Field> = (errors) => {
    console.log("errors:", errors);
  };

  const { check, toggleCheck } = useSwitch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h3>1_shouldUnregister: false</h3>
        <p>
          - 非表示でもデータ保持
          <br />- 非表示でバリデーション無視
        </p>

        <Switch checked={check} onChange={toggleCheck} />

        {check && <input {...register("data1", { required: true })} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
