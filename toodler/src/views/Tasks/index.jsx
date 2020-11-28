import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import data from '../../resources/data.json';
import TaskItem from './TaskItem';
import DisplayList from '../../components/DisplayList';

const Tasks = ({ navigation }) => {
  const [allTasks, setAllTasks] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const taskList = data.tasks.filter((x) => x.listId === listId);
      setAllTasks(taskList);
      setLoaded(true);
    }

    navigation.setOptions({
      headerRight: () => (
        <Toolbar toggle={() => setAddTable(!addTable) } />
      ),
    });
  });
  const { listId } = navigation.state.params;
  const taskList = ;

  const finishtask = (id) => {
    const task = data.tasks.filter((x) => x.id === id);
    task.isFinished = !task.isFinished;
  };

  return (
    <DisplayList
      items={taskList}
      key={Date.now()}
      renderItem={(item) => (
        { loaded ? ( 
        <TaskItem
          key={item.id}
          name={item.name}
          description={item.description}
          isFinished={item.isFinished}
          pressIt={() => { finishtask(item.id); }}
          />
        ) : (    null)
        }
      )}
    />
  );
};

export default Tasks;
w