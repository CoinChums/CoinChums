import { RFValue } from 'react-native-responsive-fontsize';
import { getScreenHeight, getScreenWidth, isTablet } from '../utils/dimensions';

const baseHeight = getScreenHeight();
const baseWidth = getScreenWidth();

export interface ITypography {
  fontSize: {
    tiny: number;
    normal: number;
    small: number;
    medium: number;
    average: number;
    big: number;
    title: number;
    subTitle: number;
    hero: number;
  };
  fontFamily: {
    '100': string;
    '300': string;
    '400': string;
    '700': string;
    '900': string;
  };
}

const fontSize = {
  tiny: isTablet() ? Number(RFValue(10, baseWidth).toFixed(2)) : Number(RFValue(10, baseHeight).toFixed(2)),
  normal: isTablet() ? Number(RFValue(12, baseWidth).toFixed(2)) : Number(RFValue(12, baseHeight).toFixed(2)),
  small: isTablet() ? Number(RFValue(14, baseWidth).toFixed(2)) : Number(RFValue(14, baseHeight).toFixed(2)),
  medium: isTablet() ? Number(RFValue(16, baseWidth).toFixed(2)) : Number(RFValue(16, baseHeight).toFixed(2)),
  average: isTablet() ? Number(RFValue(18, baseWidth).toFixed(2)) : Number(RFValue(18, baseHeight).toFixed(2)),
  big: isTablet() ? Number(RFValue(20, baseWidth).toFixed(2)) : Number(RFValue(20, baseHeight).toFixed(2)),
  title: isTablet() ? Number(RFValue(24, baseWidth).toFixed(2)) : Number(RFValue(24, baseHeight).toFixed(2)),
  subTitle: isTablet() ? Number(RFValue(32, baseWidth).toFixed(2)) : Number(RFValue(32, baseHeight).toFixed(2)),
  hero: isTablet() ? Number(RFValue(40, baseWidth).toFixed(2)) : Number(RFValue(40, baseHeight).toFixed(2)),
};

const fontFamily = {
  '100': 'Lato-Thin',
  '300': 'Lato-Light',
  '400': 'Lato-Regular',
  '700': 'Lato-Bold',
  '900': 'Lato-Black',
};

export const typography: ITypography = {
  fontSize,
  fontFamily,
};
