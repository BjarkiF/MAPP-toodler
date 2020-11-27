import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const DisplayList = (props) => {
  const { items, renderItem } = props;
  return (
    <View style={styles.container}>
      { items.map(renderItem) }
    </View>
  );
};

DisplayList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};
export default DisplayList;
