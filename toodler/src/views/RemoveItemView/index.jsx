import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Button,
} from 'react-native';

const RemoveItemView = ({ boardObj, remove, toggleView }) => (
  <View>
    <Text>
      Are you sure you want to remove the board
      {` ${boardObj.name}`}
      ?
    </Text>
    <Button title="Yes" onPress={() => remove(boardObj.id)} />
    <Button title="Cancel" onPress={() => toggleView(null)} />
  </View>
);
RemoveItemView.propTypes = {
  boardObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
};
export default RemoveItemView;
