import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Switch } from "./components/Switch";

type Field = {
  data1: string;
};

/**
 * Submit制御
 */
export default () => {
  const methods = useForm<Field>();
  const { handleSubmit, register } = methods;

  const onSubmit: SubmitHandler<Field> = (input) => {
    console.log("collect data is:", input);
  };

  /**
   * checkboxの制御
   */
  const [check, setCheck] = useState(true);
  const changeCheck = useCallback(() => setCheck(!check), [check]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>コンポーネントの表示/非表示</h1>

        <Switch label="表示/非表示" checked={check} onChange={changeCheck} />

        {check && <input {...register("data1")} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
