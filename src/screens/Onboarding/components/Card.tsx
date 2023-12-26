import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SVGImage } from '../../../components';
import { spacing } from '../../../themes/spacing';
import { APP_IMAGES } from '../../../utils/imageMapper';
import { styles } from '../Onboarding.style';

export const ExpenseExample = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.margin}>
      <View style={styles.header}>
        <SVGImage assetSrc={APP_IMAGES.xmark} height={spacing.bigHeight} width={spacing.bigWidth} />
        <Text style={styles.cardHeader}>{t('common:addExpense')}</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={[styles.textContainer, styles.divider]}>
          <Text style={styles.text}>With</Text>
          <Text style={[styles.text, styles.bold]}>you</Text>
          <Text style={styles.text}>and :</Text>
          <Text style={styles.userName}>Avinash A</Text>
          <Text style={styles.text}>+2</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.spacing}>
                <Text style={[styles.priceIcon, styles.bold]}>R</Text>
              </View>
              <Text style={styles.price}>🍜 Ramen 🍜</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.spacing}>
                <Text style={[styles.priceIcon, styles.bold]}>₹</Text>
              </View>
              <Text style={styles.price}>150.00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.textContainer, styles.margin]}>
          <Text style={styles.text}>Paid</Text>
          <Text style={[styles.text, styles.bold]}>by</Text>
          <Text style={styles.userName}>Avinash A</Text>
          <Text style={styles.text}>and split</Text>
          <Text style={styles.userName}>equally</Text>
        </View>
      </View>
    </View>
  );
};
