import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import listStyles from '../../ListItem/styles';

function FinishedCheck(props) {
  const { isFin } = props;
  if (isFin) {
    return 'YES';
  }
  return 'NO!';
}

const TaskItem = ({ name, description, isFinished, pressIt }) => (
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
/*
const TaskItem = ({ task }) => {
  const { id, name, isFinished } = task;

  const pressan = (t) => {
    console.log('PRENTA I tasks', t);
  };
  let strikeIt;
  if (isFinished) {
    strikeIt = { textDecorationLine: 'line-through' };
  }
  return (
    <TouchableOpacity onPress={() => pressan(task)}>
      <Text style={strikeIt} key={id}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
*/