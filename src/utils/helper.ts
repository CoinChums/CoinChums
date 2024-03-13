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

const loader = createRef<IndicatorRef>();

const validateTextInput = (name: string) => {
  if (!name.trim()) return `You haven't entered a name for your group yet!`;
  if (name.length < 3 || name.length > 20) return 'Group name must be between 3 and 20 characters';
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) return 'Group name should not contain special characters';
  return '';
};

const emptyFunction = () => {};

const generateRandomId = () => {
  return Math.floor(Math.random() * 10000).toString();
};

const validateCredentials = (email: string, password: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{6,})/;

  const isEmailValid = emailRegex.test(email);

  const isPasswordValid = passwordRegex.test(password);

  return {
    isEmailValid,
    isPasswordValid,
  };
};

export {
  boxShadow,
  delay,
  emptyFunction,
  generateRandomId,
  loader,
  validateTextInput,
  validateCredentials,
};
