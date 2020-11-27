import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ListItem = ({ name, color, pressIt }) => {
  const backgroundColor = color;
  return (
    <TouchableOpacity style={[styles.listItem, { backgroundColor }]} onPress={pressIt}>
      <Text style={styles.listName}>{ name }</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
