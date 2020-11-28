import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const Toolbar = ({ toggle }) => (
  <TouchableHighlight style={styles.touchable} onPress={() => toggle()}>
    <View style={styles.button}>
      <Ionicons name="md-add" size={24} color="black" />
    </View>
  </TouchableHighlight>
);
Toolbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
export default Toolbar;
