import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../../../styles/commonStyles';

const NewBoardForm = ({ obj, confirm }) => {
  const [name, onChangeName] = useState(obj.name);
  const [thumbnailPhoto, onChangeThumbnailPhoto] = useState(obj.thumbnailPhoto);

  return (
    <View style={commonStyles.ItemContainer}>
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={commonStyles.InputName}
        onChangeText={(text) => onChangeThumbnailPhoto(text)}
        value={thumbnailPhoto}
      />
      <Button title="Confirm" onPress={() => confirm({ id: obj.id, name, thumbnailPhoto })} />
    </View>
  );
};
NewBoardForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }),
  confirm: PropTypes.func.isRequired,
};
NewBoardForm.defaultProps = {
  obj: {
    name: 'Default Name',
    thumbnailPhoto:
        'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  },
};
export default NewBoardForm;
