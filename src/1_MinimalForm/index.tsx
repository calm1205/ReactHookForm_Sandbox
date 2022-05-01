import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "~/Types";

export default () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (input) =>
    console.log("submit data is:", input);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>最小構成</h1>

      <label>氏名</label>
      <input {...register("name")} />
      <br />

      <label>年齢</label>
      <input {...register("age")} />
      <br />

      <label>職業</label>
      <input {...register("job")} />
      <br />

      {/** 
      <label>血液型</label>
      <input {...register("blood")} />  error: Inputsの型に存在しないため。
      <br />
      */}

      <input type="submit" />
    </form>
  );
};
