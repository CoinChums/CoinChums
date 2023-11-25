import React from "react";
import {Button, Text, View} from "react-native";
import {THome} from "./types";

export const Home: React.FC<THome> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
