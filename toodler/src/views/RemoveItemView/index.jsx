import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Button,
} from 'react-native';
import styles from './styles';

const RemoveItemView = ({ boardObj, remove, toggleView }) => (
  <View style={styles.removeItemContainer} >
    <Text style={styles.removeItemText}>
      {`Are you sure you want to remove the board ${boardObj.name}?`}
    </Text>
    <View style={styles.removeItemButtons}>
      <Button style={styles.button} title="Yes" onPress={() => remove(boardObj.id)} />
      <Button style={styles.button} title="Cancel" onPress={() => toggleView(null)} />
    </View>
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
