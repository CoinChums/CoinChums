import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  input_outline: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 60,
    height: dimensions.viewHeight(45),
    paddingHorizontal: dimensions.viewWidth(15),
    width: '100%',
  },
  input_rounded: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 60,
    height: dimensions.viewHeight(45),
    paddingHorizontal: dimensions.viewWidth(15),
    width: '100%',
  },
});
