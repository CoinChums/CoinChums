import {View} from "react-native";
import {styles} from "./styles";

export const BottomShape = () => {
  return (
    <View style={styles.tricontainer}>
      <View style={styles.triangleLeft} />
      <View style={styles.triangleShape} />
      <View style={styles.triangleOverlap} />
      <View style={styles.triangleCenter} />
      <View style={styles.halfTriangle} />
      <View style={styles.halfTriangleOverlap} />
      <View style={styles.rightTriangle} />
    </View>
  );
};
