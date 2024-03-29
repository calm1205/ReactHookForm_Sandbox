import { ShouldUnregisterFalse } from "./components/1_ShouldUnregister_Flase";
import { ShouldUnregisterTrue } from "./components/2_ShouldUnregister_True";
import { Hidden } from "./components/3_Hidden";
import { ShouldUnregisterKeep } from "./components/4_Shouldunregister_Keep";
import { ConvertInput } from "./components/5_ConvertInput";

/**
 * Submit制御
 */
export default () => {
  return (
    <>
      <h1>送信データの制御</h1>

      <ShouldUnregisterFalse />

      <ShouldUnregisterTrue />

      <Hidden />

      <ShouldUnregisterKeep />

      <ConvertInput />

      <div style={{ marginBottom: "100px" }} />
    </>
  );
};
