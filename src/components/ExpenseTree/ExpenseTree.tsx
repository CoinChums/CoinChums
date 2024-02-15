import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { Blocks } from '../Blocks/Blocks';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { TExpenseTree } from './types';

export const ExpenseTree: React.FC<TExpenseTree> = props => {
  const { iconSrc, title, expenseTree } = props;

  return (
    <React.Fragment>
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
      <View style={styles.levels}>
        <Blocks level={expenseTree.length} />
        <View style={styles.expenses}>
          <FlatList
            data={expenseTree}
            renderItem={({ item }) => <Text style={styles.price}>{item}</Text>}
          />
        </View>
      </View>
    </React.Fragment>
  );
};
