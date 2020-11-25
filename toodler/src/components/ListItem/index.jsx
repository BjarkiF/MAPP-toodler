import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  list: {
    padding: 5,
  },
});

const ListItem = ({ name, color, pressIt }) => {
  const [configure, setConfigure] = useState(true);
  const backgroundColor = color
  return (
    <TouchableOpacity style={styles.item} onPress={pressIt}>
      <Text style={styles.list}>{ name }</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
