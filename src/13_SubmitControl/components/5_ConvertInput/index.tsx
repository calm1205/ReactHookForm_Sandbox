import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import { convertInput } from "./convertInput";

export type FormField = {
  form1: string | undefined;
  form2: string | undefined;
  switch: boolean;
};

export const ConvertInput: React.FC = () => {
  const methods = useForm<FormField>({
    shouldUnregister: false,
    defaultValues: { switch: true },
  });
  const { handleSubmit, register, control } = methods;

  const onSubmit: SubmitHandler<FormField> = (input) => {
    console.log("collect data is: ", input);
    console.log("convert input: ", convertInput(input));
  };
  const onError: SubmitErrorHandler<FormField> = (errors) => {
    console.log("errors:", errors);
  };

  const check = useWatch({ name: "switch", control });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <br />
        <br />
        <hr />
        <h3>5_convertInput</h3>
        <p>
          - 非表示でもデータ保持
          <br />- 非表示でバリデーション無視
          <br />- submit内でデータ削ぎ落とす
        </p>

        <label>
          {check ? "form1" : "form2"}
          <input type="checkbox" {...register("switch")} />
        </label>
        <br />

        {check && <input {...register("form1")} />}
        {!check && <input {...register("form2")} />}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
