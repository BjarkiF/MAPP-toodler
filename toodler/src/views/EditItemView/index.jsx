import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, Button,
} from 'react-native';

const EditItemView = ({ boardObj, edit }) => {
  const [name, onChangeName] = useState(boardObj.name);
  const [thumbnailPhoto, onChangeThumbnailPhoto] = useState(boardObj.thumbnailPhoto);
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeThumbnailPhoto(text)}
        value={thumbnailPhoto}
      />
      <Button title="Confirm" onPress={() => edit({ id: boardObj.id, name, thumbnailPhoto })} />
    </View>
  );
};
EditItemView.propTypes = {
  boardObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }).isRequired,
  edit: PropTypes.func.isRequired,
};
export default EditItemView;
