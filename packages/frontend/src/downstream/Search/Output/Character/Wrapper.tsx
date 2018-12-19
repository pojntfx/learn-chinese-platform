import { IDisplay } from "./Display";
import { IWrapper as IAnimation } from "./Animation/Wrapper";
import { IWrapper as IQuiz } from "./Quiz/Wrapper";

interface IWrapper {
  display: IDisplay;
  animation: IAnimation;
  quiz: IQuiz;
}

export { IWrapper };
