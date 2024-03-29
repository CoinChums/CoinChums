import React from 'react';
import { View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { emptyFunction } from '../../utils/helper';
import { SVGImage } from '../ImageRender/Image';
import { Input } from '../Input/Input';
import { styles } from './styles';
import { TPayerTiles } from './types';

export const PayerTiles: React.FC<TPayerTiles> = props => {
  const { icon, placeholder, variant } = props;

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SVGImage
          assetSrc={icon}
          height={spacing.titleHeight}
          width={spacing.titleWidth}
          fill={theme.palette.black.dark}
        />
      </View>
      <View style={styles.input}>
        <Input
          type="text"
          placeholder={placeholder}
          variant={variant}
          onChangeText={emptyFunction}
        />
      </View>
    </View>
  );
};
