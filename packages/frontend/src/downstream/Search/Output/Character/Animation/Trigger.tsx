import * as React from "react";

interface ITrigger {
  onTrigger: any;
  active?: boolean;
}

const Trigger = ({ onTrigger, active, ...otherProps }: ITrigger) => (
  <button {...otherProps} onClick={onTrigger}>
    {active ? "Close" : "Open"}
  </button>
);

export { ITrigger, Trigger };
