import React from 'react';
import {StyleSheet, View} from 'react-native';
import QRCodeGenerator from 'react-native-qrcode-svg';
import {} from '@react-navigation/native';

import {Button, ScreenWrapper, Text} from '../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GenerateQRCodeParamList} from '../navigation/MainNavigation';

type Props = NativeStackScreenProps<GenerateQRCodeParamList, 'GenerateQRCode'>;

const GenerateQRCode: React.FC<Props> = ({navigation}) => {
  const [qrcodeData, setQrcodeData] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);
  const [qrcodeSvgRef, setQRCodeSvgRef] = React.useState<any>(null);
  const [svgData, setSvgData] = React.useState<any>(null);

  React.useEffect(() => {
    // console.log(qrcodeSvgRef.toDataURL);
    if (qrcodeSvgRef !== null) {
      qrcodeSvgRef?.toDataURL((data: any) => {
        setSvgData(data);
      });
    }
  }, [qrcodeSvgRef]);

  const handlerGenerateQRCode = React.useCallback(() => {
    setQrcodeData(null);
    setLoading(true);

    setTimeout(() => {
      setQrcodeData('123456');
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScreenWrapper style={{paddingHorizontal: 4}}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Text>+256 700 640450</Text>
      </View>
      {/* vendor info */}

      {loading && <Text>Please wait ...</Text>}
      {/* generated qrcode image */}
      {qrcodeData && (
        <View style={styles.qrCodeContainer}>
          <QRCodeGenerator
            value={qrcodeData}
            logo={require('../assets/logo.png')}
            logoSize={30}
            logoBackgroundColor="transparent"
            size={200}
            getRef={setQRCodeSvgRef}
          />
        </View>
      )}

      {/* action buttons */}
      <View style={styles.buttonsContainer}>
        <Button text="Generate QR-Code" onPress={handlerGenerateQRCode} />
        <Button
          text="Print QR-Code"
          onPress={() => {
            navigation.navigate('Print', {qrcode: svgData});
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default GenerateQRCode;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
    paddingVertical: 16,
  },
  headerContainer: {
    width: '100%',
  },
  qrCodeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
