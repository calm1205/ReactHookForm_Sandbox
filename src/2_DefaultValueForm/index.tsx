import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  age: string;
  job: string;
  blood: string;
};

export default () => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: "山田太郎",
      age: "19",
      job: "公務員",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (input) =>
    console.log("submit data is:", input);

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
      <input {...register("job")} />
      <br />

      {/** 直接設定 非推奨かも */}
      <label>血液型</label>
      <input {...register("blood")} defaultValue="A型" />
      <br />

      <input type="submit" />
    </form>
  );
};
