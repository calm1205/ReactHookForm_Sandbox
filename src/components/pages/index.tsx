import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("example", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example", { required: true })} />
      {errors.example && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
