import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import listStyles from '../ListItem/styles';

const TaskItem = ({ name, description, isFinished, pressIt }) => {
  const [configure, setConfigure] = useState(true);
  return (
    <View style={listStyles.listContainer}>
      <TouchableOpacity style={listStyles.listItem} onPress={pressIt}>
        <Text style={listStyles.listName}>{ name }</Text>
        <Text style={styles.taskDescription}>{ description }</Text>
        <Text style={styles.taskDescriptionName}>
          Finished?
          { isFinished }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
