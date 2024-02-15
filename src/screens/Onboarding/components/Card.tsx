import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextStyle, View } from 'react-native';
import { SVGImage } from '../../../components';
import { spacing } from '../../../themes/spacing';
import { APP_IMAGES } from '../../../utils/imageMapper';
import { styles } from '../Onboarding.style';

export const ExpenseExample = () => {
  const { t } = useTranslation();

  const renderTextItem = (text: string, style: TextStyle | TextStyle[]) => (
    <Text style={style}>{text}</Text>
  );

  const renderPriceItem = (currency: string, label: string, value: string | number) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.spacing}>
        <Text style={[styles.priceIcon, styles.bold]}>{currency}</Text>
      </View>
      <Text style={styles.price}>
        {label} {value}
      </Text>
    </View>
  );

  return (
    <View style={styles.margin}>
      <View style={styles.header}>
        <SVGImage assetSrc={APP_IMAGES.xmark} height={spacing.bigHeight} width={spacing.bigWidth} />
        <Text style={styles.cardHeader}>{t('addExpense')}</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={[styles.textContainer, styles.divider]}>
          {renderTextItem('With', styles.text)}
          {renderTextItem('you', [styles.text, styles.bold])}
          {renderTextItem('and :', styles.text)}
          {renderTextItem('Avinash A', styles.userName)}
          {renderTextItem('+2', styles.text)}
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
          <View style={{ flex: 1 }}>
            {renderPriceItem('R', '🍜 Ramen 🍜', '')}
            {renderPriceItem('₹', '', '150.00')}
          </View>
        </View>
        <View style={[styles.textContainer, styles.margin]}>
          {renderTextItem('Paid', styles.text)}
          {renderTextItem('by', [styles.text, styles.bold])}
          {renderTextItem('Avinash A', styles.userName)}
          {renderTextItem('and split', styles.text)}
          {renderTextItem('equally', styles.userName)}
        </View>
      </View>
    </View>
  );
};
