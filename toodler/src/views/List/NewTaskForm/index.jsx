import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../../../styles/commonStyles';

const NewTaskForm = ({ confirm, cancel, listId }) => {
  const [description, onChangeDescription] = useState('Description');
  const [name, onChangeName] = useState('Task Name');
  return (
    <View style={commonStyles.ItemContainer}>
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeDescription(text)}
        value={description}
      />
      <Button
        title="Confirm"
        onPress={() => {
          confirm({
            name, description, listId, id: Math.floor(Math.random() * 100),
          });
        }}
      />
      <Button title="Cancel" onPress={() => cancel()} />
    </View>
  );
};

NewTaskForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    listId: PropTypes.number,
  }),
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  listId: PropTypes.func.isRequired,
};
NewTaskForm.defaultProps = {
  obj: {
    name: 'Default Name',
    description: 'Description',
    listId: 0,
  },
};

export default NewTaskForm;
