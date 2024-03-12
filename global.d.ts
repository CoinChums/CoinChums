declare module '@env';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

type ToastType = import('react-native-toast-notifications');

declare global {
  const toast: ToastType;
}

declare let toast: ToastType;
