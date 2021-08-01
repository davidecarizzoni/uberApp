// @flow
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeMap from '../components/HomeMap';
import CovidMessage from '../components/CovidMessage';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
