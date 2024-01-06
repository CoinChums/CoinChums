import { Pressable, Text, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { APP_IMAGES } from '../../utils/imageMapper';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { IHeaderProps } from './types';

export const Header: React.FC<IHeaderProps> = props => {
  const { title, onPress } = props;
  return (
    <View style={styles.cardContainer}>
      {onPress && (
        <Pressable onPress={onPress}>
          <SVGImage assetSrc={APP_IMAGES.back} height={spacing.bigHeight} width={spacing.bigWidth} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      <SVGImage
        assetSrc={APP_IMAGES.search}
        height={spacing.bigHeight}
        width={spacing.bigWidth}
        fill={theme.palette.white.dark}
      />
    </View>
  );
};
