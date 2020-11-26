import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import List from '../../components/List';
import BoardItem from '../../components/BoardItem';
import { Ionicons } from '@expo/vector-icons';
import { getAllBoards } from '../../services/littleHelper';
import EditItemView from '../EditItemView';

const styles = StyleSheet.create({
  button: {
    color: 'black',
    paddingRight: 5,
  },
});

const Boards = ({ route, navigation }) => {
  const [allBoards, setAllBoards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [addTable, setAddTable] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setAllBoards(getAllBoards());
      setLoaded(true);
    }
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight onPress={() => setAddTable(!addTable)}>
          <View style={styles.button}>
            <Ionicons name="md-add" size={24} color="black" />
          </View>
        </TouchableHighlight>
      ),
    });
  });

  const removeBoard = (id) => {
    setAllBoards((prevAllBoards) => prevAllBoards.filter((x) => x.id !== id));
  };

  const editBoard = (obj) => {
    setAllBoards((prevAllBoards) => {
      const copyOfBoards = [...prevAllBoards];
      const index = copyOfBoards.findIndex((x) => x.id === obj.id);
      copyOfBoards[index] = obj;
      return copyOfBoards;
    });
  };

  const addBoard = (obj) => {
    setAllBoards((prevAllBoards) => {
      const copyOfBoards = [...prevAllBoards];
      copyOfBoards.push(obj);
      return copyOfBoards;
    });
    setAddTable(false);
  };

  return (
    <View>
      { addTable ? (
        <EditItemView boardObj={{ name: '', thumbnailPhoto: '', id: (allBoards.length + 1)}} edit={(b) => addBoard(b)} />
      )
        : (null)
      }
      <List
        items={allBoards}
        renderItem={(item) => (
          <BoardItem
            key={item.id}
            boardObj={item}
            gotoBoard={() => navigation.navigate('Board', { boardId: item.id, name: item.name })}
            remove={(id) => removeBoard(id)}
            edit={(obj) => editBoard(obj)}
          />
        )}
      />
    </View>
  );
};
export default Boards;
