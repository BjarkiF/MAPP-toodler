import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const TaskItem = ({ task }) => {
  const { id, name } = task;

  const pressan = (t) => {
      console.log('PRENTA I tasks', t);
  }
  return (
    <TouchableOpacity onPress={() => pressan(task)}>
        <Text key={id}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
