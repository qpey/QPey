import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenWrapper, Text} from '../components';

const Home = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <ScreenWrapper>
        <Text>Home</Text>
      </ScreenWrapper>
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 100,
  },
});
