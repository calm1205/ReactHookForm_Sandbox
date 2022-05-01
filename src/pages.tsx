import MinimalForm from "~/1_MinimalForm";
import DefaultValueForm from "~/2_DefaultValueForm";

type PageType = {
  title: string;
  element: () => JSX.Element;
};

export default [
  { title: "1_最小構成", element: MinimalForm },
  { title: "2_defaultValueセット", element: DefaultValueForm },
] as PageType[];
