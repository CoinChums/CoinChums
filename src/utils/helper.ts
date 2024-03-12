import { createRef } from 'react';
import { IndicatorRef } from '../components/Indicator/Indicator';

const boxShadow = (color: string, offset = { height: 2, width: 2 }, radius = 8, opacity = 0.2) => {
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

const validateTextInput = (name: string) => {
  if (!name.trim()) return 'Group name cannot be empty';
  if (name.length < 3 || name.length > 20) return 'Group name must be between 3 and 20 characters';
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) return 'Group name should not contain special characters';
  return '';
};

export { boxShadow, delay, loader, logger, validateTextInput };
