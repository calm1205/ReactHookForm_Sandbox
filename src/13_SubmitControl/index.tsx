import { useCallback, useState } from "react";

import { Normal } from "./components/Normal";

/**
 * Submit制御
 */
export default () => {
  return (
    <>
      <h1>送信データの制御</h1>

      {/* shouldUnregister: false */}
      <Normal />
    </>
  );
};
