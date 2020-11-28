import React from 'react';
import {
  Text, TouchableOpacity, View, TextInput, Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import listStyles from '../../../components/ListItem/styles';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      isFinished: false,
      id: 0,
      listId: 0,
      editTaskBool: false,
      oldListId: 0,
    };
    // this.deleteTask = this.deleteTask.bind(this);
  }

  async componentDidMount() {
    const {
      name,
      description,
      isFinished,
      id,
      listId,
    } = this.props;
    const oldListId = listId;
    this.setState({
      name,
      description,
      isFinished,
      id,
      listId,
      oldListId,
    });
  }

  openMenu() {
    this.menu.open();
  }

  render() {
    const {
      name, description, isFinished, editTaskBool, listId, id, oldListId,
    } = this.state;
    const { removeTask } = this.props;
    return (
      <View style={commonStyles.container}>
        { !editTaskBool ? (
          <View>
            <TouchableOpacity
              style={commonStyles.listItem}
              onLongPress={() => this.openMenu()}
            >
              <Text style={listStyles.listName}>{name}</Text>
              <Text style={styles.taskDescription}>{description}</Text>
              <CheckBox
                center
                title="Complete?"
                onPress={() => this.setState({ isFinished: !isFinished })}
                checked={isFinished}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.InputName}
              defaultValue={name}
              onChangeText={(text) => this.setState({ name: text })}
            />
            <TextInput
              style={styles.InputName}
              defaultValue={description}
              onChangeText={(text) => this.setState({ description: text })}
            />
            <TextInput
              defaultValue="List ID:"
              style={styles.InputName}
              keyboardType="numeric"
              onChangeText={(text) => {
                this.setState(
                  { listId: text.split(':').pop() },
                );
              }}
            />
            <Button
              title="Confirm"
              onPress={() => {
                this.setState({ editTaskBool: !editTaskBool });
                if (listId !== oldListId) {
                  removeTask(id); // TODO: buggy af
                }
              }}
            />
          </View>
        )}
        <Menu ref={(r) => (this.menu = r)}>
          <MenuTrigger />
          <MenuOptions>
            <MenuOption
              onSelect={() => this.setState({ editTaskBool: !editTaskBool })}
              text="Edit"
            />
            <MenuOption onSelect={() => removeTask(id)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
  removeTask: PropTypes.func.isRequired,
};
export default TaskItem;
