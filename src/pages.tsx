import MinimalForm from "~/1_MinimalForm";
import DefaultValueForm from "~/2_DefaultValueForm";
import ValidationForm from "~/3_validationForm";

type PageType = {
  title: string;
  element: () => JSX.Element;
};

export default [
  { title: "最小構成", element: MinimalForm },
  { title: "defaultValueセット", element: DefaultValueForm },
  { title: "validationセット", element: ValidationForm },
] as PageType[];
