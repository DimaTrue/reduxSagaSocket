import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { startChannel, stopChannel } from '../modules/task';

const Buttons = (props) => {
  const { startChannel, stopChannel } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={startChannel}
        style={[styles.button, styles.startColor]}>
        <Text>Start Socket Channel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={stopChannel}
        style={[styles.button, styles.stopColor]}>
        <Text>Stop Socket Channel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { startChannel, stopChannel })(Buttons);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
  },
  startColor: {
    backgroundColor: '#b3e6c0',
  },
  stopColor: {
    backgroundColor: '#e69d9c',
  },
});
