import React from 'react';
import { SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../themes';

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
  statusColor?: string;
};

export const BaseLayout = React.memo(({ children, style, statusColor }: BaseLayoutProps) => {
  const styles = baseLayoutStyles();

  return (
    <SafeAreaView style={[styles.safeAreaStyle, style]}>
      <StatusBar backgroundColor={statusColor ?? theme.palette.primary.light} />
      {children}
    </SafeAreaView>
  );
});

export const baseLayoutStyles = () =>
  StyleSheet.create({
    safeAreaStyle: {
      flex: 1,
    },
  });
