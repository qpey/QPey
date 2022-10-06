import React from 'react';
import {StyleSheet, View} from 'react-native';
import QRCodeGenerator from 'react-native-qrcode-svg';

import {Button, ScreenWrapper, Text} from '../components';

const GenerateQRCode = () => {
  const [qrcodeData, setQrcodeData] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);

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
          />
        </View>
      )}

      {/* action buttons */}
      <View style={styles.buttonsContainer}>
        <Button text="Generate QR-Code" onPress={handlerGenerateQRCode} />
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
