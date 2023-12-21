import {StyleSheet, ViewStyle} from "react-native";
import {theme} from "../../themes";
import {spacing} from "../../themes/spacing";
import dimensions from "../../utils/dimensions";

interface Styles {
  tricontainer: ViewStyle;
  triangleShape: ViewStyle;
  triangleOverlap: ViewStyle;
  triangleLeft: ViewStyle;
  triangleCenter: ViewStyle;
  halfTriangle: ViewStyle;
  halfTriangleOverlap: ViewStyle;
  rightTriangle: ViewStyle;
}

const triangleBaseStyle = {
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
};

export const styles = StyleSheet.create<Styles>({
  tricontainer: {
    flexDirection: "row",
  },
  triangleShape: {
    ...triangleBaseStyle,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.error.medium,
    marginLeft: -spacing.titleWidth,
    zIndex: 10,
  },
  triangleOverlap: {
    ...triangleBaseStyle,
    borderLeftWidth: 0,
    borderRightWidth: 70,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.error.light,
    marginLeft: -dimensions.viewWidth(54),
    zIndex: 10,
  },
  triangleLeft: {
    ...triangleBaseStyle,
    borderLeftWidth: 0,
    borderRightWidth: 60,
    borderBottomWidth: 60,
    borderRightColor: "transparent",
    borderBottomColor: theme.palette.black.light,
  },
  triangleCenter: {
    ...triangleBaseStyle,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.primary.light,
    marginLeft: -spacing.heroWidth,
  },
  halfTriangleOverlap: {
    ...triangleBaseStyle,
    borderLeftWidth: 0,
    borderRightWidth: 80,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.error.medium,
    marginLeft: -dimensions.viewWidth(74),
  },
  halfTriangle: {
    ...triangleBaseStyle,
    borderLeftWidth: 80,
    borderRightWidth: 80,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.accent.light,
    marginLeft: -spacing.titleWidth,
  },
  rightTriangle: {
    ...triangleBaseStyle,
    borderLeftWidth: 44,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderBottomColor: theme.palette.secondary.dark,
    marginLeft: -spacing.tinyWidth,
  },
});
