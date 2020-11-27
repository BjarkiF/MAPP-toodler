import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import styles from './styles';
import listStyles from '../../ListItem/styles';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      isFinished: null,
    };
  }

  async componentDidMount() {
    const { name } = this.props;
    const { description } = this.props;
    const { isFinished } = this.props;
    this.setState({
      name,
      description,
      isFinished,
    });
  }

  render() {
    // const { name } = this.props;
    // const { description } = this.props;
    // const { isFinished } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
          <Text style={listStyles.listName}>{this.state.name}</Text>
          <Text style={styles.taskDescription}>{this.state.description}</Text>
          <CheckBox
            center
            title="Complete?"
            onPress={() => this.setState({ isFinished: !this.state.isFinished })}
            checked={this.state.isFinished}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaskItem;

/*
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

 -----
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
