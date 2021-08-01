import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomeMap = props => {
  return (
    <View style={styles.container}>
      <Text> Home map </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#747dd4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeMap;
