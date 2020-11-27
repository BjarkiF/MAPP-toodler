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
  items: PropTypes.arrayOf(PropTypes.object),
  renderItem: PropTypes.func.isRequired,
};
DisplayList.defaultProps = {
  items: [],
};
export default DisplayList;
