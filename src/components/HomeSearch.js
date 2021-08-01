import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeSearch = props => {
  return (
    <View>
      {/*Input box*/}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}> Where to</Text>
        <View style={styles.timeContainer}>
          <Icon name={'clockcircle'} size={16} />
          <Text> Now </Text>
          <Icon name={'down'} size={16} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    margin: 10,
    padding: 10,
    backgroundColor: '#d9d9d9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#555555',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
});

export default HomeSearch;
