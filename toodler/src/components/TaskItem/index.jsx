import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
