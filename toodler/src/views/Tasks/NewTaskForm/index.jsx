import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../../../styles/commonStyles';

const NewTaskForm = ({
  confirm, cancel, listId, obj,
}) => {
  const [description, onChangeDescription] = useState('Description');
  const [name, onChangeName] = useState('Task Name');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      if (typeof obj !== 'undefined') {
        onChangeName(obj.name);
        onChangeDescription(obj.description);
        setIsLoading(false);
      }
    }
  });

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
    isFinished: PropTypes.bool,
  }),
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  listId: PropTypes.number.isRequired,
};
NewTaskForm.defaultProps = {
  obj: {
    name: 'Default Name',
    description: 'Description',
    listId: 0,
  },
};

export default NewTaskForm;
