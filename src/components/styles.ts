import {Platform, StyleSheet} from "react-native";
import {theme} from "../themes";

const height = 44;

export const styles = StyleSheet.create({
  container: {
    width: height,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },

  progress: {
    width: "100%",
    height: "100%",
    borderRadius: height / 2,
    borderTopColor: theme.palette.black.light,
    borderLeftColor: theme.palette.success.light,
    borderRightColor: theme.palette.success.light,
    borderBottomColor: theme.palette.success.light,
    borderWidth: 4,
    position: "absolute",
  },
});
