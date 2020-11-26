import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  list: {
    padding: 5,
  },
});

const TaskItem = ({ name, description, isFinished, pressIt }) => {
  const [configure, setConfigure] = useState(true);
  return (
    <TouchableOpacity style={styles.item} onPress={pressIt}>
      <Text style={styles.list}>{ name }</Text>
      <Text style={styles.list}>{ description }</Text>
      <Text style={styles.list}>{ isFinished }</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
