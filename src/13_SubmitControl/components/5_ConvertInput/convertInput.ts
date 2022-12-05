import type { FormField } from "./index";

type ConvertInput = (input: FormField) => FormField;
/**
 * onSubmitでかき集めたデータを選別
 */
export const convertInput: ConvertInput = (input) => {
  const convert = input;

  if (input.switch) convert.form2 = undefined;
  if (!input.switch) convert.form1 = undefined;

  return convert;
};
