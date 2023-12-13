export interface IColor {
  dark: string;
  medium: string;
  light: string;
}

export interface IPalette {
  primary: IColor;
  secondary: IColor;
  success: IColor;
  warning: IColor;
  error: IColor;
  black: IColor;
  white: IColor;
  accent: IColor;
}

export const palette: IPalette = {
  primary: {
    dark: '#F94464',
    medium: '#0EA47A',
    light: '#12D39D',
  },
  secondary: {
    dark: '#787878',
    medium: '#B4BBB7',
    light: '#B4BBB7',
  },
  success: {
    dark: '#1FA73D',
    medium: '#4CBD5E',
    light: '#57EBA1',
  },
  warning: {
    dark: '#FF8800',
    medium: '#FDAC42',
    light: '#FCCC75',
  },
  error: {
    dark: '#991B1B',
    medium: '#DC2626',
    light: '#F87171',
  },
  black: {
    dark: '#000000',
    medium: '#2D3146',
    light: '#3F3F46',
  },
  white: {
    dark: '#FFFFFF',
    medium: '#F3F4F6',
    light: '#F5F5F5',
  },
  accent: {
    dark: '#A40E38',
    medium: '#A40E38',
    light: '#A40E38',
  },
};
