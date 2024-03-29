import { useCallback } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useSwitch } from "../../hooks/useSwitch";
import { Switch } from "../Switch";

type Field = {
  data2: string;
};

export const ShouldUnregisterTrue: React.FC = () => {
  const methods = useForm<Field>({ shouldUnregister: true });
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
        <br />
        <br />
        <hr />
        <h3>2_shouldUnregister: true</h3>
        <p>
          - 非表示でデータ揮発 <br />- 非表示でバリデーション無視
        </p>

        <Switch checked={check} onChange={toggleCheck} />

        {check && <input {...register("data2", { required: true })} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
