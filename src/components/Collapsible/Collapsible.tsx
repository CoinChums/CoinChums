import React, {useEffect, useState} from "react";
import {Easing, Pressable, Text, View} from "react-native";
import Collapsible from "react-native-collapsible";
import {loader} from "../../utils/helper";
import {IndicatorView} from "../Indicator/Indicator";
import {styles} from "./styles";
import {ICollapsible} from "./types";

export const Accordion: React.FC<ICollapsible> = props => {
  const {children, closeExpansion, loading} = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleExpansion = () => {
    setIsExpanded(val => !val);
  };

  useEffect(() => {
    setIsExpanded(!closeExpansion);
  }, [closeExpansion]);

  return (
    <View style={styles.container}>
      {loading && <IndicatorView isLoading={loading} ref={loader} />}
      <Collapsible collapsed={!isExpanded} easing={Easing.ease} duration={100}>
        {children}
      </Collapsible>
      <Pressable onPress={toggleExpansion}>
        <Text style={styles.icon}>{isExpanded ? "-" : "+"}</Text>
      </Pressable>
    </View>
  );
};
