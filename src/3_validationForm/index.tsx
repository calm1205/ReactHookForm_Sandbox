import React from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  age: number;
  job: string;
};

export default () => {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    reValidateMode: "onBlur", // validationが発火するタイミング
    defaultValues: {
      age: -1,
      job: "天地雷鳴士",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (input) => {
    console.log("submit data is:", input);
  };

  const requireValidation: Pick<RegisterOptions, "required"> = {
    required: "氏名は必須です。",
  };
  const ageValidation: Pick<RegisterOptions, "min"> = {
    min: {
      value: 0,
      message: "0歳以上を選択してください。",
    },
  };
  const jobValidation: Pick<RegisterOptions, "maxLength"> = {
    maxLength: {
      value: 4,
      message: "4文字までです。",
    },
  };

  console.log("validation error:", formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>バリデーション設定</h1>

      <label>氏名</label>
      <input {...register("name", requireValidation)} />
      <span>{formState.errors.name?.message}</span>
      <br />

      <label>年齢</label>
      <input {...register("age", ageValidation)} />
      <span>{formState.errors.age?.message}</span>
      <br />

      <label>職業</label>
      <input {...register("job", jobValidation)} />
      <span>{formState.errors.job?.message}</span>
      <br />

      <input type="submit" />
    </form>
  );
};
