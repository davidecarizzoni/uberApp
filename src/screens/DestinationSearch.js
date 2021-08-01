// @flow
import * as React from 'react';
import {View, TextInput, StyleSheet, Button, SafeAreaView} from 'react-native';
import {useState} from 'react';

const DestinationSearch = props => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title="Press me" onPress={() => console.log('pressed')} />
        <TextInput
          style={styles.textInput}
          placeholder={'From'}
          value={from}
          onChangeText={setFrom}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'To'}
          value={destination}
          onChangeText={setDestination}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    height: 50,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});

export default DestinationSearch;
