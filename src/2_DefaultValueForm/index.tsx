import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "~/Types";

export default () => {
  const { register, handleSubmit, getValues } = useForm<Inputs>({
    defaultValues: { name: "山田太郎", age: 19 },
  });

  const onSubmit: SubmitHandler<Inputs> = (input) =>
    console.log("submit data is:", input);

  console.log("name default value:", getValues("name"));
  console.log("age default value:", getValues("age"));
  console.log("job default value:", getValues("job"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>初期値設定</h1>

      <label>氏名</label>
      <input {...register("name")} />
      <br />

      <label>年齢</label>
      <input {...register("age")} />
      <br />

      <label>職業</label>
      <input {...register("job")} defaultValue="天地雷鳴士" />
      <span>表示はできるがRHFの対象外</span>
      <br />

      <input type="submit" />
    </form>
  );
};
