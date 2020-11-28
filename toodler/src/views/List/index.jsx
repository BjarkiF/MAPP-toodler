import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import TaskItem from '../Tasks/TaskItem';
import DisplayList from '../../components/DisplayList';
import Toolbar from '../Toolbar';
import commonStyles from '../../styles/commonStyles';
import NewTaskForm from '../Tasks/NewTaskForm';

const List = ({ route, navigation }) => {
  const { listId } = route.params;
  const [tasksOnList, setTasksOnList] = useState([]);
  const [reloadList, setReloadList] = useState(true);
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    if (reloadList) {
      setTasksOnList(data.tasks.filter((x) => x.listId === listId));
      setReloadList(false);
    }
    navigation.setOptions({
      headerRight: () => (
        <Toolbar toggle={() => setAddTask(!addTask)} />
      ),
    });
  });

  const addToList = (l) => {
    setTasksOnList((prev) => {
      const {
        name,
        description,
        isFinished,
        id,
      } = l;
      const copyOfLists = [...prev];
      copyOfLists.push({
        name,
        description,
        isFinished,
        id,
        listId,
      });
      return copyOfLists;
    });
    setAddTask(false);
  };

  function removeTask(id) {
    const newList = tasksOnList.filter((x) => x.id !== id);
    setTasksOnList(newList);
  }

  return (
    <View style={commonStyles.Container}>
      { addTask ? (
        <NewTaskForm
          confirm={(l) => addToList(l)}
          cancel={() => setAddTask(false)}
          listId={listId}
        />
      ) : (null) }
      <DisplayList
        items={tasksOnList}
        renderItem={(item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            isFinished={item.isFinished}
            onPress={() => item.pressIt}
            listId={item.listId}
            removeTask={(id) => removeTask(id)}
          />
        )}
      />
    </View>
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
