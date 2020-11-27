import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import TaskItem from '../Tasks/TaskItem';
import styles from './styles';

const ListItem = ({ listObj, tasks, remove }) => {
  const { name } = listObj;
  return (
    <View style={styles.listView}>
      <Text style={styles.listTitle}>{name}</Text>
      <View style={styles.itemTask}>
        { tasks.map((t) => <TaskItem key={t.id} task={t} removeTable={(t) => remove(t)}/>) }
      </View>
    </View>
  );
};
export default ListItem;
