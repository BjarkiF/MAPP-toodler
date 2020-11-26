import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const List = (props) => {
  const { items, renderItem } = props;
  return (
    <View style={styles.container}>
      { items.map(renderItem) }
    </View>
  );
};
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};
export default List;
