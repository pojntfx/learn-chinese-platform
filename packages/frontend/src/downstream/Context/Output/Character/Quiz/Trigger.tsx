import * as React from "react";
import { Button } from "@libresat/frontend-components";

interface ITrigger {
  onTrigger?: any;
  active?: boolean;
  disabled?: boolean;
}

const Trigger = ({ onTrigger, active, ...otherProps }: ITrigger) => (
  <Button
    icon={active ? "close" : "student"}
    circular
    active={active}
    onClick={onTrigger}
    {...otherProps}
  />
);

export { ITrigger, Trigger };
