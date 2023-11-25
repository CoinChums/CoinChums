import {API_URL} from "@env";
import React from "react";
import {Button, Text, View} from "react-native";
import {THome} from "./types";

export const Home: React.FC<THome> = ({navigation}) => {
  return (
    <View>
      <Text>
        Accessing env example {"->"} {API_URL}
      </Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
