import { Hidden } from "./components/Hidden";
import { Normal } from "./components/Normal";
import { ShouldUnregister } from "./components/ShouldUnregister";

/**
 * Submit制御
 */
export default () => {
  return (
    <>
      <h1>送信データの制御</h1>

      {/* shouldUnregister: false */}
      <Normal />

      {/* shouldUnregister: true */}
      <ShouldUnregister />

      {/* hidden */}
      <Hidden />
    </>
  );
};
