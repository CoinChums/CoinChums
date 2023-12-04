import {API_URL} from "@env";
import React from "react";
import {Button, Text, View} from "react-native";
import {IndicatorView} from "../../components/Indicator/Indicator";
import {loader} from "../../utils/helper";
import {THome} from "./types";

const Home: React.FC<THome> = ({navigation}) => {
  return (
    <View>
      <Text>
        Accessing env example {"->"} {API_URL}
      </Text>
      <Button title="Go to details" onPress={() => navigation.navigate("Details")} />
      <IndicatorView isLoading={true} ref={loader} />
    </View>
  );
};

export default React.memo(Home);
