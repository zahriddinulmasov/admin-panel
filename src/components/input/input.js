import { forwardRef } from "react";

import "./input.scss"

export const Input = forwardRef((props, ref) => {
  return (
    <>
      <input className="input form-control mb-2" ref={ref} {...props} />
    </>
  );
});
