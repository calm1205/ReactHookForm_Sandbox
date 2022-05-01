import React, { lazy, Suspense, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTitle } from "./PageTitle";

export const Router: React.FC = () => {
  const MinimalForm = lazy(() => import("~/1_MinimalForm"));
  const DefaultValueForm = lazy(() => import("~/2_DefaultValueForm"));
  const ValidationForm = lazy(() => import("~/3_validationForm"));
  const NestedRegisterForm = lazy(() => import("~/4_NestedRegisterForm"));
  const NestedInputForm = lazy(() => import("~/5_NestedInputForm"));

  const suspensize = useCallback(
    (Component: React.LazyExoticComponent<() => JSX.Element>) => (
      <Suspense fallback={<>...</>}>
        <Component />
      </Suspense>
    ),
    []
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>ReactHookForm Sandbox</h1>
              <ol>
                <PageTitle title="最小構成" path="minimal" />
                <PageTitle title="defaultValueセット" path="default" />
                <PageTitle title="validationセット" path="validation" />
                <PageTitle
                  title="inputコンポーネント化(regiser)"
                  path="input"
                />
                <PageTitle
                  title="inputコンポーネント化(useFormContext)"
                  path="input2"
                />
              </ol>
            </>
          }
        />
        <Route path="/minimal" element={suspensize(MinimalForm)} />
        <Route path="/default" element={suspensize(DefaultValueForm)} />
        <Route path="/validation" element={suspensize(ValidationForm)} />
        <Route path="/input" element={suspensize(NestedRegisterForm)} />
        <Route path="/input2" element={suspensize(NestedInputForm)} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
