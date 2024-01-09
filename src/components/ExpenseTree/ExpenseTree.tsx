import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { TExpenseTree } from './types';

export const ExpenseTree: React.FC<TExpenseTree> = props => {
  const { iconSrc, title } = props;
  return (
    <View style={styles.flexRow}>
      <View style={styles.icon}>
        <SVGImage
          assetSrc={iconSrc}
          height={spacing.titleHeight}
          width={spacing.titleWidth}
          fill={theme.palette.black.light}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
