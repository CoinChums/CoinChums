import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { CURRENCY_SYMBOLS } from '../../constants/currency';
import { GROUP_STATUS } from '../../constants/enums';
import dimensions from '../../utils/dimensions';
import { ConditionRenderer } from '../ConditionRenderer/ConditionRender';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { GroupListTileProps } from './types';

export const GroupListTile: React.FC<GroupListTileProps> = ({ node }) => {
  const { t } = useTranslation();
  const { icon, title, group_status } = node;
  const balance = `${CURRENCY_SYMBOLS.INR} 300`; //TODO GET FROM BACKEND
  const isDebt = true; //TODO GET FROM BACKEND
  const groupState = group_status !== GROUP_STATUS.ARCHIVE;

  return (
    <ConditionRenderer
      state={groupState}
      C1={
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <SVGImage
              url={icon}
              height={dimensions.viewHeight(100)}
              width={dimensions.viewWidth(100)}
              imageStyles={styles.icon}
            />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
            {group_status === GROUP_STATUS.SETTLED && <Text style={styles.subTitle}>{t('noExpense')}</Text>}
            {group_status === GROUP_STATUS.UNSETTLED && (
              <Text style={[styles.balance, isDebt ? styles.debt : styles.owes]}>
                {isDebt ? t('owe') : t('owes')} {balance}
              </Text>
            )}
          </View>
        </View>
      }
      C2={<></>}
    />
  );
};
