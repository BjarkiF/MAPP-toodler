import React from 'react';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import TaskItem from '../Tasks/TaskItem';
import DisplayList from '../DisplayList';

const List = ({ route }) => {
  const { listId } = route.params;
  const taskList = data.tasks.filter((x) => x.listId === listId);

  return (
    <DisplayList
      items={taskList}
      renderItem={(item) => (
        <TaskItem
          key={item.id}
          name={item.name}
          description={item.description}
          isFinished={item.isFinished}
          onPress={() => item.pressIt}
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
