import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles'

const ListItem = ({ name, color, pressIt }) => {
  const [configure, setConfigure] = useState(true);
  const backgroundColor = color
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity style={styles.listItem} onPress={pressIt}>
        <Text style={styles.listName}>{ name }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
