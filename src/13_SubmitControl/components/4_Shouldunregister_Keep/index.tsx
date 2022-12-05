import { useCallback } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useSwitch } from "../../hooks/useSwitch";
import { Switch } from "../Switch";
import { Input } from "./Input";

type Field = {
  data4: string;
};

export const ShouldUnregisterKeep: React.FC = () => {
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
        <h3>4_shouldUnregister: keep</h3>
        <p>
          - 非表示でデータ揮発 ← 無理やりkeep
          <br />- 非表示でバリデーション無視
        </p>

        <Switch checked={check} onChange={toggleCheck} />

        {check && <Input register={register("data4", { required: true })} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
