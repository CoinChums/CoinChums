import {createRef} from "react";
import {IndicatorRef} from "../components/Indicator/Indicator";

const boxShadow = (color: string, offset = {height: 2, width: 2}, radius = 8, opacity = 0.2) => {
  return {
    elevation: radius,
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
  };
};

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve as () => void, ms));
};

const logger = (...args: any) => {
  if (__DEV__) {
    console.log(...args); // eslint-disable-line no-console
  }
};

const loader = createRef<IndicatorRef>();

export {boxShadow, delay, loader, logger};
