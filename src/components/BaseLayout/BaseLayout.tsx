import React from "react";
import {SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle} from "react-native";
import {theme} from "../../themes";

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const BaseLayout = React.memo(({children, style}: BaseLayoutProps) => {
  const styles = baseLayoutStyles();

  return (
    <SafeAreaView style={[styles.safeAreaStyle, style]}>
      <StatusBar backgroundColor={theme.palette.white.dark} />
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
