import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import DisplayList from '../../components/DisplayList';
import BoardItem from '../../components/BoardItem';
import data from '../../resources/data.json';
import EditItemView from '../EditItemView';

const Boards = ({ navigation }) => {
  const [allBoards, setAllBoards] = useState([]);

  useEffect(() => {
    if (allBoards.length === 0) {
      setAllBoards(data.boards);
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
  );
};

export default Boards;
