import {API_URL} from "@env";
import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {BaseLayout, Button} from "../../components";
import {IndicatorView} from "../../components/Indicator/Indicator";
import {loader} from "../../utils/helper";
import {THome} from "./types";
import {useFocusEffect} from "@react-navigation/native";
import {styles} from "./Home.style";

const Home: React.FC<THome> = ({navigation}) => {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const rotation = useSharedValue(0);

  useEffect(() => {
    const rotateAnimation = () => {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 2000,
          easing: Easing.linear,
        }),
        -1,
      );
    };

    rotateAnimation();

    return () => {
      rotation.value = 0;
    };
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <BaseLayout>
      <Text>
        Accessing env example {"->"} {API_URL}
      </Text>
      <Button title="Go to details" onPress={() => navigation.navigate("Details")} />
      <IndicatorView isLoading={true} ref={loader} />
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
      <View style={styles.container}>
        <Animated.View style={[styles.square, animatedStyle]} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
