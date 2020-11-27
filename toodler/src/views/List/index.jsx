import React from 'react';
// import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import TaskItem from '../../components/TaskItem';
import DisplayList from '../../components/DisplayList';


const List = ({ navigation }) => {
  const { listId } = navigation.state.params;
  const taskList = data.tasks.filter((x) => x.listId === listId);

  const finishtask = (id) => {
    const task = data.tasks.filter((x) => x.id === id);
    task.isFinished = !task.isFinished;
  };

  return (
    <DisplayList
      items={taskList}
      renderItem={(item) => (
        <TaskItem
          key={item.id}
          name={item.name}
          description={item.description}
          isFinished={item.isFinished}
          pressIt={() => { finishtask(item.id); }}
        />
      )}
    />
  );
};

export default List;
