import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../../../styles/commonStyles';

const NewListForm = ({ confirm, cancel }) => {
  const [color, onChangeColor] = useState('#FF0000');
  const [name, onChangeName] = useState('Temporary List Name');
  return (
    <View style={commonStyles.ItemContainer}>
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeColor(text)}
        value={color}
      />
      <Button
        title="Confirm"
        onPress={() => {
          confirm({ name, color, id: Math.floor(Math.random() * 100) });
        }}
      />
      <Button title="Cancel" onPress={() => cancel()} />
    </View>
  );
};
NewListForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
NewListForm.defaultProps = {
  obj: {
    name: 'Default Name',
    color: '#F00',
  },
};
export default NewListForm;
