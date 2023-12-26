import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.success.light,
    borderRadius: 60,
    height: dimensions.viewHeight(45),
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
});
