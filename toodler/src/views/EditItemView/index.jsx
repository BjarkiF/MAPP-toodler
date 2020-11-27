import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, Button,
} from 'react-native';
import styles from './styles';

const EditItemView = ({ obj, confirm }) => {
  const [name, onChangeName] = useState(obj.name);
  const [thumbnailPhoto, onChangeThumbnailPhoto] = useState(obj.thumbnailPhoto);

  return (
    <View style={styles.EditItemContainer}>
      <TextInput
        style={styles.InputName}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={styles.InputName}
        onChangeText={(text) => onChangeThumbnailPhoto(text)}
        value={thumbnailPhoto}
      />
      <Button title="Confirm" onPress={() => confirm({ id: obj.id, name, thumbnailPhoto })} />
    </View>
  );
};
EditItemView.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }),
  confirm: PropTypes.func.isRequired,
};
EditItemView.defaultProps = {
  obj: {
    name: 'Default Name',
    thumbnailPhoto:
      'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  },
};
export default EditItemView;
