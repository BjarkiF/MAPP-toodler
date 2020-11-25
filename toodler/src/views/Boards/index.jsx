import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import List from '../../components/List';
import BoardItem from '../../components/BoardItem';

import { getAllBoards } from '../../services/littleHelper';
import EditItemView from '../EditItemView';

const Boards = ({ navigation }) => {
  const [allBoards, setAllBoards] = useState([]);

  useEffect(() => {
    if (allBoards.length === 0) {
      setAllBoards(getAllBoards());
    }
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

  const addBoard = () => {

  };

  return (
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
  );
};
export default Boards;
