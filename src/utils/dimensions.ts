import {Platform, Dimensions, PixelRatio} from "react-native";

const isAndroid = (): boolean => Platform.OS === "android";
const isIOS = (): boolean => Platform.OS === "ios";

const screenWidth: number = Dimensions.get("window").width;
const screenHeight: number = Dimensions.get("window").height;

const designHeight: number = 812;
const designWidth: number = 375;

const viewWidth = (width: number): number => {
  if (!width) throw new Error("Width must be present");

  // Parse string percentage input and convert it to number.
  const percent: number = (width / designWidth) * 100;
  const elemWidth: number = parseFloat(percent + "%");

  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const viewHeight = (height: number): number => {
  if (!height) throw new Error("Height must be present");

  // Parse string percentage input and convert it to number.
  const percent: number = (height / designHeight) * 100;
  const elemHeight: number = parseFloat(percent + "%");

  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export default {
  isAndroid,
  isIOS,
  screenWidth,
  screenHeight,
  viewHeight,
  viewWidth,
};
