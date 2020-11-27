import React from 'react';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import TaskItem from '../Tasks/TaskItem';
import DisplayList from '../DisplayList';

const List = ({ route }) => {
  const { listId } = route.params;
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
List.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      listId: PropTypes.number,
    }),
  }).isRequired,
};
export default List;
