import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {Button, ScreenWrapper, Text} from '../components';

const Home = () => {
  const onReadSuccess = (e: any) => {
    console.log(e?.data);
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <ScreenWrapper>
        <View style={styles.header}>
          <Text>Safe QR-Code Scanner</Text>
        </View>

        <View
          style={{
            flex: 1,
            marginVertical: 8,
            overflow: 'hidden',
          }}>
          <QRCodeScanner
            onRead={onReadSuccess}
            flashMode={RNCamera.Constants.FlashMode.off}
            containerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            topViewStyle={{flex: 0}}
            bottomViewStyle={{flex: 0}}
            cameraStyle={{overflow: 'hidden', height: '100%'}}
            cameraContainerStyle={{
              height: 440,
              marginVertical: 8,
              backgroundColor: '#FEF8FE',
            }}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <Button
                text="re-scan"
                onPress={() => console.log('rescanning ...')}
                style={{width: '80%', alignSelf: 'center'}}
              />
            }
            reactivate
          />
        </View>
      </ScreenWrapper>
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#B3E5FC',
    marginTop: 12,
    width: '90%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  //   sample styles for qrcode component
  centerText: {
    // flex: 1,
    fontSize: 18,
    // padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    // padding: 16,
  },
});
