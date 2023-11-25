import dimensions from "../utils/dimensions";

export interface ISpacing {
  tinyHeight: number;
  tinyWidth: number;
  smallHeight: number;
  smallWidth: number;
  normalHeight: number;
  normalWidth: number;
  mediumHeight: number;
  mediumWidth: number;
  averageHeight: number;
  averageWidth: number;
  bigHeight: number;
  bigWidth: number;
  titleHeight: number;
  titleWidth: number;
  heroHeight: number;
  heroWidth: number;
}

export const spacing: ISpacing = {
  tinyHeight: dimensions.viewHeight(4),
  tinyWidth: dimensions.viewWidth(4),
  smallHeight: dimensions.viewHeight(8),
  smallWidth: dimensions.viewWidth(8),
  normalHeight: dimensions.viewHeight(12),
  normalWidth: dimensions.viewWidth(12),
  mediumHeight: dimensions.viewHeight(16),
  mediumWidth: dimensions.viewWidth(16),
  averageHeight: dimensions.viewHeight(18),
  averageWidth: dimensions.viewWidth(18),
  bigHeight: dimensions.viewHeight(22),
  bigWidth: dimensions.viewWidth(22),
  titleHeight: dimensions.viewHeight(26),
  titleWidth: dimensions.viewWidth(26),
  heroHeight: dimensions.viewHeight(30),
  heroWidth: dimensions.viewWidth(30),
};
