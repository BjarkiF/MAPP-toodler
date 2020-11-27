import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Toolbar = ({ toggle }) => (
  <TouchableHighlight style={styles.touchable} onPress={() => toggle() }>
    <View style={styles.button}>
      <Ionicons name="md-add" size={24} color="black" />
    </View>
  </TouchableHighlight>
);
export default Toolbar;
