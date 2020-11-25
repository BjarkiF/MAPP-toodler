import React, { useState, useEffect } from 'react';
import List from '../../components/List';
import BoardItem from '../../components/BoardItem';

import { getAllBoards } from '../../services/littleHelper';

const Boards = ({ navigation }) => {
  const [allBoards, setAllBoards] = useState([]);

  useEffect(() => {
    if (allBoards.length === 0) {
      setAllBoards(getAllBoards());
    }
  });

  const removeTable = (id) => {
    setAllBoards((prevAllBoards) => prevAllBoards.filter((x) => x.id !== id));
  };

  const editTable = (obj) => {
    setAllBoards((prevAllBoards) => {
      const copyOfBoards = [...prevAllBoards];
      const index = copyOfBoards.findIndex((x) => x.id === obj.id);
      copyOfBoards[index] = obj;
      return copyOfBoards;
    });
  };

  return (
    <List
      items={allBoards}
      renderItem={(item) => (
        <BoardItem
          key={item.id}
          boardObj={item}
          gotoBoard={() => navigation.navigate('Board', { boardId: item.id, name: item.name })}
          remove={(id) => removeTable(id)}
          edit={(obj) => editTable(obj)}
        />
      )}
    />
  );
};
export default Boards;
