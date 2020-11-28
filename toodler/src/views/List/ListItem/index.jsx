import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, Button,
} from 'react-native';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';

const ListItem = ({
  name, color, pressIt, remove, edit,
}) => {
  const [editList, setEditList] = useState(false);
  const [changeName, onChangeName] = useState(name);
  const [changeColor, onChangeColor] = useState(color);
  useEffect(() => {

  });

  const backgroundColor = color;
  return (
    <View style={styles.Container}>
      { !editList ? (
        <TouchableOpacity
          style={[commonStyles.listItem, { backgroundColor }]}
          onPress={pressIt}
        >
          <Text style={styles.listName}>{ name }</Text>
          <TouchableOpacity style={styles.listItem} onPress={() => remove()}>
            <Text style={styles.listName}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => setEditList(!editList)}>
            <Text style={styles.listName}>Edit</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <View>
          <TextInput
            style={styles.InputName}
            onChangeText={(text) => onChangeName(text)}
            value={changeName}
          />
          <TextInput
            style={styles.InputName}
            onChangeText={(text) => onChangeColor(text)}
            value={changeColor}
          />
          <Button
            title="Confirm"
            onPress={() => {
              edit({ name: changeName, color: changeColor });
              setEditList(false);
            }}
          />
          <Button title="Cancel" onPress={() => setEditList(false)} />
        </View>
      )}
    </View>
  );
};
export default ListItem;
