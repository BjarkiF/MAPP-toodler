import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import listStyles from '../../../components/ListItem/styles';

function FinishedCheck(props) {
  const { isFin } = props;
  if (isFin) {
    return 'YES';
  }
  return 'NO!';
}

const TaskItem = ({
  name, description, isFinished, pressIt,
}) => (
  <View style={listStyles.listContainer}>
    <TouchableOpacity style={listStyles.listItem} onPress={pressIt}>
      <Text style={listStyles.listName}>{ name }</Text>
      <Text style={styles.taskDescription}>{ description }</Text>
      <Text style={styles.taskDescriptionName}>
        Finished-
        <FinishedCheck isFin={{ isFinished }} />
      </Text>
    </TouchableOpacity>
  </View>
);

export default TaskItem;
