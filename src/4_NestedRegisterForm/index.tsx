import React, { useCallback, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";
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

  console.log("validation error:", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>コンポーネント化(register)</h1>

      <Input
        label="氏名"
        register={register("name", { required: "氏名は必須です。" })}
        error={errors.name?.message}
      />

      <Input
        label="年齢"
        register={register("age", {
          required: "年齢は必須です",
          min: { value: 0, message: "年齢は0歳以上。" },
        })}
        error={errors.age?.message}
      />

      <Input
        label="職業"
        register={register("job", { required: "職業は必須です。" })}
        error={errors.job?.message}
      />

      <input type="submit" />
    </form>
  );
};
