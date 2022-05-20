import React, { lazy, Suspense, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTitle } from "./PageTitle";

export const Router: React.FC = () => {
  const MinimalForm = lazy(() => import("~/1_MinimalForm"));
  const DefaultValueForm = lazy(() => import("~/2_DefaultValueForm"));
  const ValidationForm = lazy(() => import("~/3_validationForm"));
  const NestedRegisterForm = lazy(() => import("~/4_NestedRegisterForm"));
  const NestedInputForm = lazy(() => import("~/5_NestedInputForm"));
  const NestedControllerForm = lazy(() => import("~/6_ControllerForm"));
  const SwitchForm = lazy(() => import("~/7_SwitchForm"));
  const ErrorMessage = lazy(() => import("~/8_ErrorMessage"));
  const UseWatch = lazy(() => import("~/9_UseWatch"));
  const ClearError = lazy(() => import("~/10_ClearError"));
  const SetFocus = lazy(() => import("~/11_SetFocus"));
  const ValidationControl = lazy(() => import("~/12_ValidationControl"));

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
                <PageTitle title="registerコンポーネント" path="register" />
                <PageTitle
                  title="useFormContextコンポーネント"
                  path="useFormContext"
                />
                <PageTitle title="controllerコンポーネント" path="controller" />
                <PageTitle title="コンポーネントの表示/非表示" path="switch" />
                <PageTitle title="ErrorMessage" path="error" />
                <PageTitle title="UseWatch" path="usewatch" />
                <PageTitle title="ClearError" path="clear" />
                <PageTitle title="SetFocus" path="setfocus" />
                <PageTitle title="Validation制御" path="validationControl" />
              </ol>
            </>
          }
        />
        <Route path="/minimal" element={suspensize(MinimalForm)} />
        <Route path="/default" element={suspensize(DefaultValueForm)} />
        <Route path="/validation" element={suspensize(ValidationForm)} />
        <Route path="/register" element={suspensize(NestedRegisterForm)} />
        <Route path="/useFormContext" element={suspensize(NestedInputForm)} />
        <Route path="/controller" element={suspensize(NestedControllerForm)} />
        <Route path="/switch" element={suspensize(SwitchForm)} />
        <Route path="/error" element={suspensize(ErrorMessage)} />
        <Route path="/usewatch" element={suspensize(UseWatch)} />
        <Route path="/clear" element={suspensize(ClearError)} />
        <Route path="/setfocus" element={suspensize(SetFocus)} />
        <Route
          path="/validationControl"
          element={suspensize(ValidationControl)}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
