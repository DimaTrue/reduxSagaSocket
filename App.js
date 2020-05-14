import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Buttons from './src/components/Buttons';
import TaskList from './src/components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Buttons />
        <TaskList />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
