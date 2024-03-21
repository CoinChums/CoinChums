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
    dark: '#1C543C',
    medium: '#0FA47A',
    light: '#83CCAC',
  },
  secondary: {
    dark: '#153E31',
    medium: '#0CA27A',
    light: '#84CCB4',
  },
  error: {
    dark: '#DC2626',
    medium: '#EF4444',
    light: '#F87171',
  },
  success: {
    dark: '#2ECC71',
    medium: '#2ECC71',
    light: '#82E0AA',
  },
  warning: {
    dark: '#CA8A04',
    medium: '#EAB308',
    light: '#FACC15',
  },
  black: {
    dark: '#000000',
    medium: '#0F172A',
    light: '#1E293B',
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
    medium: '#B2BDB9',
    light: '#3F3F46',
  },
};
