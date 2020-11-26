import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'column',
    padding: 3,
    width: 300,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },

  listTitle: {
    padding: 3,
    backgroundColor: 'pink',
  },
  itemTask: {
    padding: 10,
  },
  task: {
    paddingBottom: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  boardConfigure: {
    height: 100,
    width: 100,
  },
});

const ListItem = ({ listObj, tasks }) => {
  const { name } = listObj;
  return (
    <View style={styles.listView}>
      <Text style={styles.listTitle}>{name}</Text>
      <View style={styles.itemTask}>
        {tasks.map((t) => <TaskItem key={t.id} task={t} />)}
      </View>
    </View>
  );
};
export default ListItem;
