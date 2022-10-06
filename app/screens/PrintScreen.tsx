import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-renders-html';
import {Button, ScreenWrapper} from '../components';
import {MainNavigationParamList} from '../navigation/MainNavigation';

type Props = NativeStackScreenProps<MainNavigationParamList, 'Print'>;

const Print: React.FC<Props> = ({route}) => {
  const htmlContent = `
        <div style="width: 100%; display: flex; align-items: center;">
        <img src="data:image/jpeg;base64,${route.params.qrcode}" />
        </div>
    `;

  return (
    <ScreenWrapper style={{paddingHorizontal: 4}}>
      <HTML
        html={htmlContent}
        imagesMaxWidth={Dimensions.get('window').width}
      />
      <Button text="Print" onPress={() => {}} style={{marginVertical: 24}} />
    </ScreenWrapper>
  );
};

export default Print;
