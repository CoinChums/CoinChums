import { Text, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { APP_IMAGES } from '../../utils/imageMapper';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { TExpenseTileProps } from './types';

export const ExpenseTile: React.FC<TExpenseTileProps> = props => {
  const { date, title, subTitle, owes } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.icon}>
        <SVGImage
          fill={theme.palette.black.dark}
          assetSrc={APP_IMAGES.profile}
          height={spacing.heroHeight}
          width={spacing.heroWidth}
        />
      </View>
      <View style={styles.view}>
        <View style={styles.ml8}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{subTitle}</Text>
        </View>
        <Text style={styles.text}>{owes}</Text>
      </View>
    </View>
  );
};
