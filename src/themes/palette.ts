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
}

export const palette: IPalette = {
  primary: {
    dark: "#0A2885",
    medium: "#0F3CC9",
    light: "#587CEC",
  },
  secondary: {
    dark: "#00CFDE",
    medium: "#9999FF",
    light: "#E8FAF7",
  },
  success: {
    dark: "#06C270",
    medium: "#39D98A",
    light: "#57EBA1",
  },

  warning: {
    dark: "#FF8800",
    medium: "#FDAC42",
    light: "#FCCC75",
  },
  error: {
    dark: "#FF3B3B",
    medium: "#FF5C5C",
    light: "#FF8080",
  },
};
