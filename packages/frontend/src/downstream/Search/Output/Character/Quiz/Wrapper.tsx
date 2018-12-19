import { IControls } from "./Controls";
import { IDisplay } from "./Display";
import { IOptions } from "./Options";
import { IStatistics } from "./Statistics";
import { ITrigger } from "./Trigger";
import { IWrapper as IMessages } from "./Messages/Wrapper";

interface IWrapper {
  messages: IMessages;
  controls: IControls;
  display: IDisplay;
  options: IOptions;
  statistics: IStatistics;
  trigger: ITrigger;
}

export { IWrapper };
