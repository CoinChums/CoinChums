import { Text, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { TilesProps } from './types';

export const Tiles: React.FC<TilesProps> = props => {
  const { title, icon, titleColor } = props;

  return (
    <View style={styles.titleContainer}>
      <SVGImage
        assetSrc={icon}
        height={spacing.titleHeight}
        width={spacing.titleWidth}
        fill={theme.palette.black.dark}
      />
      <Text style={[styles.title, titleColor]}>{title}</Text>
    </View>
  );
};
