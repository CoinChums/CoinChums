import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SVGImage } from '../../components';
import { spacing } from '../../themes/spacing';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Onboarding.style';

export const ExpenseExample = () => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.header}>
        <SVGImage assetSrc={APP_IMAGES.xmark} height={spacing.bigHeight} width={spacing.bigWidth} />
        <Text style={styles.cardHeader}>{t('common:addExpense')}</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text>
          With <Text>you</Text> and: <Text>Avinash V.</Text> +2
        </Text>
      </View>
    </View>
  );
};
