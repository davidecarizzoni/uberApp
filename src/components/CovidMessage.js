// @flow
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if is necessary</Text>
      <Text style={tw`text-white mb-2`}>
        This is a completely random text so i write something in the way that it
        seems real
      </Text>
      <Text style={[tw`text-white`, styles.subTitle]}>Learn more </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#2b80ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: 'bold',
  },
});

export default CovidMessage;
