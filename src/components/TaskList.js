import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { topTaskSelector } from '../modules/task';

const TaskList = (props) => {
  const { serverStatus, channelStatus } = props;

  const serverStatusColor = serverStatus === 'on' ? 'green' : 'red';
  const channelStatusColor = channelStatus === 'on' ? 'green' : 'red';
  const taskList = props.tasks.map((task) => (
    <Text key={task.taskID}>{task.taskName}</Text>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.taskListBlock}>
        <Text style={styles.title}>Task List</Text>
        <View style={styles.taskListContent}>{taskList}</View>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.title}>Connection Info</Text>
        <View style={styles.serverStatusBlock}>
          <Text>Server Status: </Text>
          <Text style={{ color: serverStatusColor }}>{serverStatus}</Text>
        </View>
        <View>
          <Text>Channel Status: </Text>
          <Text style={{ color: channelStatusColor }}>{channelStatus}</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  tasks: topTaskSelector(state),
  serverStatus: state.taskReducer.serverStatus,
  channelStatus: state.taskReducer.channelStatus,
});

export default connect(mapStateToProps)(TaskList);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderStyle: 'solid',
    padding: 10,
  },
  taskListBlock: {
    width: 200,
  },
  taskListContent: {
    padding: 0,
  },
  infoBlock: {
    flexDirection: 'column',
    width: 200,
  },
  serverStatusBlock: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
  },
});
