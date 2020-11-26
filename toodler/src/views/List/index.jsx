import React from 'react';
// import PropTypes from 'prop-types';
import { getTasksByListId } from '../../services/littleHelper';
import TaskItem from '../../components/TaskItem';
import DisplayList from '../../components/DisplayList';

const List = ({ navigation }) => {
  const {listId} = navigation.state.params;
  const taskList = getTasksByListId(listId);

  return (
    <DisplayList
      items={taskList}
      renderItem={(item) => (
        <TaskItem
          key={item.id}
          name={item.name}
          description={item.description}
          isFinished={item.isFinished}
        />
      )}
    />
  );
};

export default List;
