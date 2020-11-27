import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import DisplayList from '../DisplayList';
import BoardItem from './BoardItem';
import Toolbar from '../Toolbar';

import styles from './styles';
import data from '../../resources/data.json';
import EditItemView from '../EditItemView';

const Boards = ({ route, navigation }) => {
  const [allBoards, setAllBoards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [addTable, setAddTable] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setAllBoards(data.boards);
      setLoaded(true);
    }

    navigation.setOptions({
      headerRight: () => (
        <Toolbar toggle={() => setAddTable(!addTable) } />
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
    <View style={styles.boardContainer}>
      { addTable ? (
        <EditItemView
          obj={{
            name: 'Default Name',
            thumbnailPhoto: 'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
            id: Math.floor(Math.random() * 100),
          }}
          confirm={(b) => addBoard(b)}
        />
      )
        : (null)}
      <DisplayList
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
