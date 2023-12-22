import {DefaultTheme} from "@react-navigation/native";
import {t} from "i18next";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Text, View} from "react-native";
import {Accordion, BaseLayout, Header} from "../../components";
import {theme} from "../../themes";
import {styles} from "./Settings.style";

const languages = [
  {code: "en", label: t("language:english")},
  {code: "ka", label: t("language:kannada")},
];

const Settings = () => {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState("en");
  const selectedLanguageCode = i18n.language;

  return (
    <BaseLayout>
      <Header title="Settings" />
      <Accordion loading={false} title={"Settings Page"}>
        <>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
        </>
      </Accordion>
      <View>
        <Text style={styles.language}>
          {t("common:change_language")} ({lang})
        </Text>
        {languages.map(currentLang => {
          const selectedLanguage = currentLang.code === selectedLanguageCode;
          return (
            <Text
              key={currentLang.code}
              onPress={() => {
                setLang(currentLang.code);
                i18n.changeLanguage(currentLang.code);
              }}
              style={[
                {color: selectedLanguage ? DefaultTheme.colors.primary : theme.palette.black.dark},
                styles.languageText,
              ]}>
              {currentLang.label}
            </Text>
          );
        })}
      </View>
    </BaseLayout>
  );
};

export default React.memo(Settings);
