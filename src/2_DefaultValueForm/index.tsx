import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "~/Types";

export default () => {
  const { register, handleSubmit, setValue, getValues } = useForm<
    Inputs & { height: number }
  >({
    defaultValues: { name: "山田太郎", age: 19 },
  });

  register("height");
  setValue("height", 190);

  const onSubmit: SubmitHandler<Inputs> = (input) => {
    console.log("submit data is:", input);
  };

  console.log("name default value:", getValues("name"));
  console.log("age default value:", getValues("age"));
  console.log("height default value:", getValues("height"));
  console.log("job default value:", getValues("job"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>初期値設定</h1>

      <label>氏名</label>
      <input {...register("name")} />
      <span>推奨される設定方法</span>
      <br />

      <label>年齢</label>
      <input name="age" />
      <span>RHFで管理されている値とinputにある値が乖離</span>
      <br />

      <label>身長</label>
      <input name="height" />
      <br />

      <label>職業</label>
      <input {...register("job")} defaultValue="天地雷鳴士" />
      <span>表示はできるがRHFの対象外</span>
      <br />

      <input type="submit" />
    </form>
  );
};
