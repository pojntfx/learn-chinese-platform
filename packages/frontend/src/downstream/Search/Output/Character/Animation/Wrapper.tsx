import { IControls } from "./Controls";
import { ITrigger } from "./Trigger";
import { IOptions } from "../Quiz/Options";
import { IDisplay } from "../Quiz/Display";

interface IWrapper {
  controls: IControls;
  display: IDisplay;
  options: IOptions;
  trigger: ITrigger;
}

export { IWrapper };
