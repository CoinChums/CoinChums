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
  text: IColor;
  background: IColor;
}

export const palette: IPalette = {
  primary: {
    dark: '#0EA47A',
    medium: '#0EA47A',
    light: '#12D39D',
  },
  secondary: {
    dark: '#4A90E2',
    medium: '#4A90E2',
    light: '#AED6F1',
  },
  error: {
    dark: '#E74C3C',
    medium: '#E74C3C',
    light: '#F1948A',
  },
  success: {
    dark: '#2ECC71',
    medium: '#2ECC71',
    light: '#82E0AA',
  },
  warning: {
    dark: '#F39C12',
    medium: '#F39C12',
    light: '#FAD02E',
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
    dark: '#FFD700',
    medium: '#FFD700',
    light: '#FFECB3',
  },
  text: {
    dark: '#ECF0F1',
    medium: '#ECF0F1',
    light: '#34495E',
  },
  background: {
    dark: '#2C3E50',
    medium: '#2C3E50',
    light: '#34495E',
  },
};
