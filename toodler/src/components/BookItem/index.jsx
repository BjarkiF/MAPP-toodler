import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const BookItem = ({ name, src, pressIt }) => {
  const [configure, setConfigure] = useState(true);
  return (
    <View style={styles.boardView}>
      { configure ? (
        <TouchableOpacity style={styles.leftBoardView} onPress={pressIt}>
          <Text>{ name }</Text>
          <Image style={styles.thumbnail} source={{ uri: src }} />
        </TouchableOpacity>
      ) : (
        <View style={styles.leftBoardView}>
          <Text>Fuck this FALSE!</Text>
        </View>
      )}
      <View style={styles.rightBoardView}>
        <TouchableOpacity onPress={() => setConfigure(!configure)}>
          <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setConfigure(!configure)}>
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookItem;
