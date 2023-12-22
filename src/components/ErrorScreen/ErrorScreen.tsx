import {useTranslation} from "react-i18next";
import {Pressable, Text, View} from "react-native";
import {spacing} from "../../themes/spacing";
import {APP_IMAGES} from "../../utils/imageMapper";
import {SVGImage} from "../ImageRender/Image";
import {styles} from "./styles";
import {IErrorScreen} from "./types";

export const ErrorScreen: React.FC<IErrorScreen> = props => {
  const {t} = useTranslation();
  const {description, onBtnPress, showButton = true, containerStyles = {}, btnStyles = {}} = props;

  return (
    <View style={styles.container ?? containerStyles}>
      <View style={styles.icon}>
        <SVGImage assetSrc={APP_IMAGES.warning} height={spacing.heroHeight} width={spacing.heroWidth} />
      </View>
      <Text style={styles.description}>{description}</Text>
      {showButton && (
        <Pressable style={styles.btn ?? btnStyles} onPress={onBtnPress}>
          <SVGImage assetSrc={APP_IMAGES.reload} height={spacing.heroHeight} width={spacing.heroWidth} />
          <Text style={styles.btnText}>{t("common:try")}</Text>
        </Pressable>
      )}
    </View>
  );
};
