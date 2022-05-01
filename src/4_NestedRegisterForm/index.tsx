import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NestedInput } from "./NestedInput";
import { Inputs } from "~/Types";

export default () => {
  const methods = useForm<Inputs>({ reValidateMode: "onBlur" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (input) => {
    console.log("submit data is:", input);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>コンポーネント化(register)</h1>

      <NestedInput
        label="氏名"
        register={register("name", { required: "氏名は必須です。" })}
        error={errors.name?.message}
      />

      <NestedInput
        label="年齢"
        register={register("age", {
          required: "年齢は必須です",
          min: { value: 0, message: "年齢は0歳以上。" },
        })}
        error={errors.age?.message}
      />

      <NestedInput
        label="職業"
        register={register("job", { required: "職業は必須です。" })}
        error={errors.job?.message}
      />

      <input type="submit" />
    </form>
  );
};
