// @flow
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeMap from '../components/HomeMap';
import HomeSearch from '../components/HomeSearch';
import CovidMessage from '../components/CovidMessage';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
