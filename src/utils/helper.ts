import React, { createRef, ReactElement, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const removeItemById = <T extends { _id: string }>(items: T[], id: string): T[] =>
  items.filter(item => item._id !== id);

const convertPercentageToNumber = (percentage: string) => {
  const numberString = percentage.replace('%', '');
  return parseInt(numberString, 10);
};

const addUniqueIdToChildren = (children: ReactNode, primaryKey: string = 'key'): ReactElement[] => {
  try {
    return React.Children.toArray(children).map(child => {
      if (React.isValidElement(child)) {
        if (!child.props[primaryKey]) {
          return React.cloneElement(child, { ...child.props, [primaryKey]: uuidv4() });
        }
      }
      return child;
    }) as ReactElement[];
  } catch (err) {
    return React.Children.toArray(children) as ReactElement[];
  }
};

const isNotEmpty = (text: string) => text?.toString().trim()?.length > 0;

export {
  addUniqueIdToChildren,
  boxShadow,
  convertPercentageToNumber,
  delay,
  emptyFunction,
  generateRandomId,
  loader,
  removeItemById,
  validateCredentials,
  validateTextInput,
  isNotEmpty,
};
