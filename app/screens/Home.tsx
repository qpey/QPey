import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';

import {Button, ScreenWrapper, Text} from '../components';

const SERVER_URL = '';
const TOKEN = '';

const Home = () => {
  const [scan, setScan] = useState<boolean>(false);
  const [fail, setFailure] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const callToServer = async (data: {}) => {
    setScan(false);
    try {
      const response = await axios.post(SERVER_URL, data, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response) {
        // launch fail
        setFailure(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onReadSuccess = (e: any) => {
    console.log(e?.data);
    const data = {
      url: e?.data?.url,
    };

    // if response, call to api
    callToServer(data);

    // redirect to the payment details screen, along with
    // payment params.

    // else provide a re-scan
  };

  const restartScanning = () => {
    setScan(true);
    setResult(null);
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <ScreenWrapper style={{paddingHorizontal: 4}}>
        <View style={styles.header}>
          <Text>Safe QR-Code Scanner</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // overflow: 'hidden',
          }}>
          {/* only show scanner if button clicked */}
          {!scan && (
            <Button
              text="Scan"
              onPress={() => setScan(true)}
              style={{width: '60%'}}
            />
          )}

          {scan && (
            <React.Fragment>
              <QRCodeScanner
                onRead={onReadSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                containerStyle={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
                topViewStyle={{flex: 0, paddingHorizontal: 4}}
                bottomViewStyle={{flex: 0}}
                cameraStyle={{
                  overflow: 'hidden',
                  height: '100%',
                  borderRadius: 8,
                }}
                cameraContainerStyle={{
                  height: 400,
                  marginVertical: 8,
                  backgroundColor: '#f5eff5',
                  // borderRadius: 16,
                  overflow: 'hidden',
                  // padding: 8,
                  width: '90%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                topContent={
                  <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>
                      wikipedia.org/wiki/QR_code
                    </Text>{' '}
                    on your computer and scan the QR code.
                  </Text>
                }
                bottomContent={
                  <Button
                    text="re-scan"
                    onPress={restartScanning}
                    style={{width: '80%', alignSelf: 'center'}}
                  />
                }
                reactivate={true}
              />
            </React.Fragment>
          )}
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
    fontSize: 18,
    color: '#777',
  },
  textBold: {
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
