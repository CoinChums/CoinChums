import { ImageStyle } from 'react-native';

export interface IImage {
  assetSrc?: any;
  width: number;
  height: number;
  fill?: string;
  url?: string;
  imageStyles?: ImageStyle;
}
